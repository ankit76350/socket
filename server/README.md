# Socket.IO Express Server

This is a simple Node.js server using Express and Socket.IO to establish a WebSocket connection.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository or create a new directory and navigate into it:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Initialize a new Node.js project and install dependencies:
   ```sh
   npm init -y
   npm install express socket.io
   ```

## Usage

### Start the Server
Run the following command to start the server:
```sh
node server.js
```

The server will run on `http://localhost:3000`.

## Code Breakdown

### Importing Modules
```javascript
import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
```
- `express`: Imports the Express.js framework for handling HTTP requests.
- `createServer`: Imports the HTTP server module to create an HTTP server instance.
- `Server`: Imports the Socket.IO module to enable real-time communication.

### Initializing Express
```javascript
const app = express();
```
- Creates an Express application instance (`app`) to define routes and handle HTTP requests.

### Creating an HTTP Server
```javascript
const server = createServer(app);
```
- Wraps the Express application in an HTTP server.

### Initializing Socket.IO
```javascript
const io = new Server(server);
```
- Creates a Socket.IO server instance and binds it to the HTTP server for real-time communication.

### Defining an HTTP Route
```javascript
app.get('/', (req, res) => {
  res.send("Hello world with socket");
});
```
- Defines a GET route at `/` that responds with the text "Hello world with socket".
- `req` (request): Represents the client's request.
- `res` (response): Sends data back to the client.

#### Example Request and Response
1. Client sends a request:
   ```sh
   curl http://localhost:3000/
   ```
2. Server responds with:
   ```sh
   Hello world with socket
   ```

### Listening for WebSocket Connections
```javascript
io.on('connection', (socket) => {
  console.log('a user connected');
});
```
- Listens for a new WebSocket connection.
- When a client connects, it logs "a user connected".

#### How It Works?
1. A client connects using WebSocket.
2. The server logs:
   ```sh
   a user connected
   ```
3. The connection remains active for real-time communication.

### Starting the Server
```javascript
server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
```
- Starts the server on port `3000`.
- Logs a message once the server is running.

#### How It Works?
1. You run:
   ```sh
   node server.js
   ```
2. The server logs:
   ```sh
   server running at http://localhost:3000
   ```
3. The server is now ready to handle HTTP and WebSocket connections.

## Summary
1. **Creates an Express server** (`app`).
2. **Wraps it with an HTTP server** (`server`).
3. **Initializes a Socket.IO instance** (`io`).
4. **Handles HTTP GET requests** at `/`.
5. **Listens for WebSocket connections** and logs when a user connects.
6. **Starts the server on port 3000** and logs the URL.

## License
This project is licensed under the MIT License.

