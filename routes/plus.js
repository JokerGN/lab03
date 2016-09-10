var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var number1 = req.query.num1;
	var number2 = req.query.num2;
	if (number1 == undefined) {
	res.sendfile("./public/html/plus.html");
	} else {
	var sum=parseInt(number1)+parseInt(number2);
	var total = sum.toString();
 	res.send(total);
 	}
});

module.exports = router;
