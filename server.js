const express = require('express');
const cors = require('cors');
const Produit = require('./route/produit');
const app = express();
const mongoose = require("mongoose");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/products', Produit);

mongoose.connect("mongodb+srv://ali:ali@cluster0.supq0.mongodb.net/Test_technique?authSource=admin&replicaSet=atlas-phraqh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
,{useNewUrlParser: true, useUnifiedTopology: true}).catch(() => console.log('base de donneés introuvable'));
app.listen(5000 ,()=> {console.log('Runing on port 5000');} );
