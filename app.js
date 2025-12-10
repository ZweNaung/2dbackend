const dotenv = require('dotenv').config();
console.log("My R2 Access Key is:", process.env.R2_ACCESS_KEY_ID); // <-- ဒီစာကြောင်းကို ခဏထည့်ပါ
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

const postRoutes = require('./routes/postRoutes');
const adminRoutes=require('./routes/adminRoutes');
const apiRoute =  require('./routes/apiRoute');


app.set("view engine","ejs");
app.set('views','views')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(postRoutes)

app.use("/admin",adminRoutes);

app.use("/api",postRoutes);

app.use("/api",apiRoute)



mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{console.log(`Listening on port ${process.env.PORT}!`);});
        console.log("Connected to Mongodb database")})
    .catch((err)=>{console.log(`Error connecting to Mongodb database ${err}`)})

