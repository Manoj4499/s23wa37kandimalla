var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(Object.keys(req.query).length == 0){
    var x = Math.random();
    res.render('computation',{par1:`Math.acosh() applied to ${x} is ${Math.acosh(x)}`,
  par2:`Math.log1p() applied to ${x} is ${Math.log1p(x)}`,
  par3:`Math.tan() applied to ${x} is ${Math.tan(x)}`,
  par4:`Math.sqrt() applied to ${x} is ${Math.sqrt(x)}`
  });
  }

  else{
    for(let m in req.query){
      res.render('computation',{par1:`Math.acosh() applied to ${req.query[m]} is ${Math.acosh(req.query[m])}`,
  par2:`Math.log1p() applied to ${req.query[m]} is ${Math.log1p(req.query[m])}`,
  par3:`Math.tan() applied to ${req.query[m]} is ${Math.tan(req.query[m])}`,
  par4:`Math.sqrt() applied to ${req.query[m]} is ${Math.sqrt(req.query[m])}`})
    }
  }
  
});

module.exports = router;
