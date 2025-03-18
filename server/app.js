import express from 'express'
const app = express();
const port = 3000

app.get('/', (_, res) => {
  res.send("Hello World from backend!");
});

app.listen(port, () => {
  console.log('server running at http://localhost:3000');
});