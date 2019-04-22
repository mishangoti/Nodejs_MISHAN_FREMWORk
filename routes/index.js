var express = require('express');
var router = express.Router();
var task = require('../controllers/task');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task/list', task.list);


module.exports = router;
