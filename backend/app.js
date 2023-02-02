const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// const uri = "mongodb+srv://blogpostdatabase:T9yporyE0Vs8zFWL@cluster0.tvyrltn.mongodb.net/?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://blogpostdatabase:T9yporyE0Vs8zFWL@cluster0.tvyrltn.mongodb.net/?retryWrites=true&w=majority";
const blogs = require('./routes/route');
const MONGO_USERNAME = 'abinash';
const MONGO_PASSWORD = 'India@123';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'Blogpost';

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.Promise = global.Promise;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

//MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  //  if (err) throw err;
    //const db = client.db("blogpost");
   // console.log("Connected to MongoDB!");
   // client.close();
//});

// connects our back end code with the database
 mongoose.connect(uri,
     {   useNewUrlParser: true,
     useUnifiedTopology: true
                 });

                 let db = mongoose.connection;

                 db.once('open', () => console.log('connected to the database'));



app.use(express.static(path.join(__dirname, 'dist/blog-post')));
app.use('/addshark',blogs);
app.get('*', (req, res) => {
  console.log("api called");
  res.sendFile(path.join(__dirname, 'dist/blog-post/index.html'));
});

app.listen(3100, () => {
  console.log('Server listening on port 3100');
});