const express = require('express');
const dbProduct = require('../model/Product')
const fs = require('fs')
const path = require('path')
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  dbProduct.find({}, (err, data) => {
    if (data.length) {
      console.log('dataga keldi');
      res.render('card', {
        title: 'Bosh sahifa',
        db: data
      });
    } else {
      console.log('errorga keldi');
      res.render('error', {
        title: 'Mahsulot Mavjud Emas'
      })
    }
  })

});

router.get('/delete/:id', async (req, res) => {
  try {
    const id = { _id: req.params.id }
    await dbProduct.findByIdAndDelete(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (null) {
          res.redirect('/')
        } else {
          fs.unlink(path.join(__dirname, '..', 'public', 'images/' + data.img), (err) => {
            if (err) {
              console.log(err);
              res.redirect('/')
            } else {
              res.redirect('/')
            }
          })
        }
      }
    })

  } catch (error) {
    console.log(error);
  }
})

router.get('/', (req, res) => {
  

})



module.exports = router;
