const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blog = new Schema ({
        HeaderTitle: { type: String, required: true },
        paragraph: [
            {"contentType":{ type: String, required: true }},
            {"content" : { type: String, required: true }}
        ],
});


module.exports = mongoose.model('blog', blog);