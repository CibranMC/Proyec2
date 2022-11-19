const express = require('express');
const router = express.Router();


  



/* GET home page */

router.get("/", (req, res, next) => {
  res.render("index", {layout: false}) ;
})

router.get("/register", (req, res, next) => {

  res.render("index/register", {layout: false}) ;
})

module.exports = router;
