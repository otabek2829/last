const express = require('express');
const dbProduct = require('../model/Product')
const dbUser = require('../model/User')
const md = require('../middlawre/verifed')
const fas = require('../middlawre/removeImg')
const fileFilter = require('../middlawre/fileUpload')
const router = express.Router();
const chalk = require('chalk')
const fs = require('fs')
const path = require('path');
const { db } = require('../model/Product');

/* GET home page. */
router.get('/', function (req, res, next) {


  res.render('add', {
    title: 'Add Product',
    btn: "Joylashtirish"
  });
});

router.post('/', fileFilter.single("img"), md, (req, res) => {
  const db = new dbProduct({
    title: req.body.title,
    price: req.body.price,
    sale: req.body.sale,
    category: req.body.category,
    comment: req.body.comment,
    img: req.file.filename
  })
  db.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/')
    }
  })
})

/// Working one's card product method of GET

router.get('/product/:id', (req, res) => {
  dbProduct.findById(req.params.id, (err, data) => {
    try {
      res.render("product", {
        title: "Mahsulot haqida",
        data
      })
    } catch (error) {
      console.log(error);
    }
  })



})

/// Working one's card product EDIT method of GET

router.get('/update/:id', (req, res) => {
  dbProduct.findById(req.params.id, (err, data) => {
    try {
      res.render("add", {
        title: "Mahsulot ozgartirish",
        data,
        btn: "O'zgartirish",


      })
    } catch (error) {
      console.log(error);
    }
  })

})

/// Working one's card product EDIT method of POST

router.post('/update/:id', fileFilter.single("img"), async (req, res) => {

  const db = {
    title: req.body.title,
    price: req.body.price,
    comment: req.body.comment,
    category: req.body.category,
    img: req.file.filename,
  }
  try {
    const ids = { _id: req.params.id }
    await dbProduct.findByIdAndUpdate(ids, db)
    res.redirect('/')
  } catch (error) {
    console.log(error);
  }
})

/// Working one's card product DELETE method of GET



module.exports = router;
