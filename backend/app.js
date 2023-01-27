const express = require('express');
const path = require('path');
const app = express();
// const uri = "mongodb+srv://blogpostdatabase:T9yporyE0Vs8zFWL@cluster0.tvyrltn.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static(path.join(__dirname, 'dist/blog-post')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/blog-post/index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
}); 