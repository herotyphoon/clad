const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const mysql = require('mysql2');


const app = express();
const server = http.createServer(app);
const io = new Server(server);

const sequelize = require('./config/db.config');
const userRoutes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../public')));


app.use('/api/users', userRoutes);

const db = mysql.createConnection({
  host: "192.168.29.212",
  user: "clad",
  password: "Aakarsh123p",
  database: "clad"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('chatMessage', (data) => {
    console.log('Message received:', data);
    
    io.emit('chatMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = 3000;

sequelize.sync().then(() => {
  console.log('Database synced');
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Database connection failed:', err);
});
