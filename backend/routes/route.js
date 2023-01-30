const express = require('express');
const router = express.Router();
const path = require('path');

const blogs = require('../controllers/blogController');


router.post('/addshark', blogs.create);

router.get('/getshark', blogs.list);

module.exports = router;