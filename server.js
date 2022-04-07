const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => console.log(`App is running on port ${port}`))