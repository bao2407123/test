var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {fgw : 'Greenwich'});
});

router.get('/greenwich', (req,res) => {
  res.render('fgw')
})

router.get('/hanoi', (req, res) =>{
  res.render('hanoi', { hn : 'Hanoi', vn : 'Vietnam'})
})

router.get('/vietnam', (req, res) =>{
  var country = 'Vietnam'
  var capital = 'Hanoi'
  var population = '90 millions'
  var location = 'South East Asia'
  var sports ='football'
  var image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBECql4xbMyFK2lUPgSNG7mTJ8HJoJV-_ZA&usqp=CAU'
  res.render('vietnam',
  {ten_nuoc : country, thu_do :  capital, dan_so : population,
  vi_tri : location, anh : image, monthethaodcyeuthich: sports })
})
module.exports = router;
