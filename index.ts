import express from 'express';
const app = express();
const port = 3001;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/hello', (req, res) => {
  res.json('Hello Clari! POSt');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
