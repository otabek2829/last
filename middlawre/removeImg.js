const fs = require('fs')
const path = require('path')
const dbProduct = require('../model/Product')

// fs.unlink(__dirname + '/uploads' + imageResponse + ".png", (err) => {
//     if (err) throw err;
//     console.log('successfully deleted file');
// });

// const fas = () => fs.unlink(path.join(__dirname, "..", "public", 'images', '.jpg'), (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect('/')
//         }
//     })




// const imgId = () => dbProduct.findById(id, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // console.log(chalk.bold.bgCyan(data.img));
//         fs.unlink(path.join(__dirname, '..', 'public', 'images' + data.img), (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(chalk.cyan('Rasm Delete Boldi'));
//             }
//         })
//     }
// })
// module.exports = imgId