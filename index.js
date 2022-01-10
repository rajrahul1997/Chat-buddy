const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const app = express();


//initialize socket for the server
const io = socketio(server)

io.on('connection', socket => {
    console.log("New user connected")
})

mongoose.connect('mongodb://127.0.0.1', { useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true,
  autoIndex: true
});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


app.use(express.json());




//PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});
