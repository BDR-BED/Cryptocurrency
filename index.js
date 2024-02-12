import express from "express";
import axios from "axios";
import ejs from "ejs";




const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

const first_URL = "https://api.binance.com/api/v3/ticker/price";


app.get("/" , async(req , res) => {
    try{
    const result = await axios(first_URL); 
    res.render("index.ejs" , {
        btc: result.data[11].price.slice(0, -6) ,
        eth: result.data[12].price.slice(0, -6) ,
        bnb: result.data[98].price.slice(0, -6) ,
        sol: result.data[779].price.slice(0, -6) ,
        min: result.data[1563].price.slice(0, -4) ,
        xrp: result.data[306].price.slice(0, -4) ,
    })
    }
    catch(error){
        res.status(404).send(error.message);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
