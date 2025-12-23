const cron = require('node-cron');
const { scrapeData, closeBrowser } = require('../services/scraperData');

let isScraping = false;

const startScheduler = () => {
    console.log("✅ Scheduler Running (Updated Times)...");

    const runScraperSafe = async (modeName) => {
        if (isScraping) return; // Overlap Protection

        isScraping = true;
        try {
            const data = await scrapeData();
            if (data) {
                console.log(`[${modeName}] 🕒 ${new Date().toLocaleTimeString('en-US', { hour12: false })} -> 2D: ${data.twoD} (Val: ${data.value})`);
            }
        } catch (error) {
            console.error(`❌ Job Error:`, error.message);
        } finally {
            isScraping = false;
        }
    };

    // ==========================================
    // ☀️ MORNING SESSION (11:50 - 12:01)
    // ==========================================

    // 1. (Slow) 11:50 to 11:56 -> 30 sec interval
    cron.schedule('*/30 50-56 11 * * 1-5', () => {
        runScraperSafe("Morning Slow");
    });

    // 2. (Fast) 11:57 to 11:59 -> 5 sec interval
    cron.schedule('*/5 57-59 11 * * 1-5', () => {
        runScraperSafe("Morning Fast");
    });

    // 3. (Fast) 12:00 to 12:01 -> 5 sec interval
    cron.schedule('*/5 0-1 12 * * 1-5', () => {
        runScraperSafe("Morning Fast");
    });

    // 🛑 12:02 -> Close Browser (RAM Clean up)
    cron.schedule('0 2 12 * * 1-5', async () => {
        await closeBrowser();
    });


    // ==========================================
    // 🌇 EVENING SESSION (15:50 - 16:31)
    // ==========================================

    // 1. (Slow) 15:50 to 15:58 -> 30 sec interval
    cron.schedule('*/30 50-58 15 * * 1-5', () => {
        runScraperSafe("Evening Slow");
    });

    // 2. (Fast) 15:59 -> 5 sec interval (Transition)
    cron.schedule('*/5 59 15 * * 1-5', () => {
        runScraperSafe("Evening Fast");
    });

    // 3. (Fast) 16:00 to 16:31 -> 5 sec interval
    cron.schedule('*/5 0-31 16 * * 1-5', () => {
        runScraperSafe("Evening Fast");
    });

    // 🛑 16:32 -> Close Browser (RAM Clean up)
    cron.schedule('0 32 16 * * 1-5', async () => {
        await closeBrowser();
    });
};

module.exports = startScheduler;