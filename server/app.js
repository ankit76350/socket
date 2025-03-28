import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'


const app = express();
const server = createServer(app);

const io = new Server(server); // instance is created for io (means whole circut)

app.get('/', (req, res) => {
  res.send("Hello world with socket");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});