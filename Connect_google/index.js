const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const PORT = 8899;

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "connect-src 'self' https://*/*");
    next();
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use('/',require('./routes'));


app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in Listening");
        return;
    }
    console.log("Listening on PORT",PORT);
})