const express = require('express');
const router = express.Router();
const path = require('path');

const blogs = require('../controllers/blogController');


router.post('/addshark', function(req, res) {
    blogs.create(req,res);
});

router.get('/getshark', function(req, res) {
    blogs.list(req,res);
});