const express = require('express')
const app = express()
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my Website')
})



app.listen(port, () => {
  console.log('Running on PORT 3000')
})