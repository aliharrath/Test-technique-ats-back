const mongoose = require('mongoose');
const axios = require('axios');
const produitSchema = require('../model/produit');
const Produit = mongoose.model('produits', produitSchema);
const express = require('express');
const router = express.Router();

router.get('/getData', async (req, res) => {
	const Produits = await axios("https://tech.dev.ats-digital.com/api/products?size=100");
	Produits.data.products.forEach( produit => {const nv_produit = new Produit(produit);
	nv_produit.save();} );
    return res.send('mis a jour');
});

router.get('/', async (req, res) => {
	const prdts = await Produit.find().limit(20).skip(20 * req.query.page) ;
	return res.send(prdts);
    
});

router.get('/:id', async (req, res) => {
	const prdt = await Produit.findById(req.params.id);
    return res.send(prdt);
});

module.exports = router ;