const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => console.log(`App is running on port ${port}`))