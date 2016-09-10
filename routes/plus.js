var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var number1 = req.query.num1;
	var number2 = req.query.num2;
	if (number1 == undefined) {
	res.sendfile("./public/html/plus.html");
	} else {
 	res.send(number1+number2);
 	}
});

module.exports = router;
