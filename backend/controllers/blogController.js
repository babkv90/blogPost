const path = require('path');
const blog = require('../models/blog');


exports.create = function (req, res) {
    var newBlog = new blog(req.body);
    console.log(req.body);
    newBlog.save(function (err) {
        if (err) {
            res.status(400).send('Unable to save blog to database');
        } else {
            res.status(200).send('Data saved successfully');
            // res.redirect('/sharks/getshark');
        }
    });
};


exports.list = function (req, res) {
    blog.find({}).exec(function (err, blogs) {
            if (err) {
                    return res.send(500, err);
            }
            res.status(200).send(blogs);
    });
};