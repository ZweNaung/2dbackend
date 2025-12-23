const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");

const agent = new https.Agent({
    rejectUnauthorized: false,
    keepAlive: true,
    ciphers:[
        "TLS_AES_128_GCM_SHA256",
        "TLS_AES_256_GCM_SHA384",
        "TLS_CHACHA20_POLY1305_SHA256",
        "ECDHE-ECDSA-AES128-GCM-SHA256",
        "ECDHE-RSA-AES128-GCM-SHA256",
        "ECDHE-ECDSA-AES256-GCM-SHA384",
        "ECDHE-RSA-AES256-GCM-SHA384",
        "ECDHE-ECDSA-CHACHA20-POLY1305",
        "ECDHE-RSA-CHACHA20-POLY1305",
        "ECDHE-RSA-AES128-SHA",
        "ECDHE-RSA-AES256-SHA",
        "AES128-GCM-SHA256",
        "AES256-GCM-SHA384",
        "AES128-SHA",
        "AES256-SHA"
    ].join(':')
})


const scrapeData = async () =>{
        const url = "https://www.set.or.th/en/home"

    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1'
    };

    try {
        console.log("Connecting to SET");
        const response = await axios.get(url,{
            headers: headers,
            httpsAgent:agent,
            timeout:15000,
            family:4,
            decompress:true,});

        const html = response.data;
        const $ = cheerio.load(html);

        const getSet = $('div.d-flex.justify-content-between span.ms-auto').first().text().trim();
        const valueText = $('td.text-end.text-nowrap.fs-20px.px-1.text-deep-gray').text().trim();

        const valueArr = valueText
            .split('\n')
            .map(v => v.trim())
            .filter(v => v !== '');

        const getValue = valueArr[2]
        let lastSet =getSet.slice(-1)
        let lastValue =getValue.slice(-4,-3)
        const towD = lastSet + lastValue


         let latestData = {
            set:getSet,
            value:getValue,
            twoD:towD,
        }

        return latestData;

    }catch(err){
        console.log('Error fetching data',err)
        return null
    }
}

module.exports=scrapeData;