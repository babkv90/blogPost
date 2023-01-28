const express = require('express');
const path = require('path');
const app = express();
// const uri = "mongodb+srv://blogpostdatabase:T9yporyE0Vs8zFWL@cluster0.tvyrltn.mongodb.net/?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://blogpostdatabase:T9yporyE0Vs8zFWL@cluster0.tvyrltn.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;
    const db = client.db("blogpost");
    console.log("Connected to MongoDB!");
    client.close();
});


app.use(express.static(path.join(__dirname, '')));

app.get('*', (req, res) => {
  console.log("api called");
  res.sendFile(path.join(__dirname, 'dist/blog-post/index.html'));
});

app.listen(3100, () => {
  console.log('Server listening on port 3100');
}); 