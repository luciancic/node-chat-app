require('./config/config.js')
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const publicPath = path.join(__dirname, '../public');
const indexPath = publicPath + '/index.html';

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.sendFile(indexPath);
//});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
