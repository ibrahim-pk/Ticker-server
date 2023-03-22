const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// const data=[
//   {Company:'Cinevista Ltd.', highPrice:Math.floor(Math.random() * 100),lowPrice:68},
//   {Company:'Diksat Transworld Ltd.', highPrice:60,lowPrice:70},
//   {Company:'SKP Securities Ltd.', highPrice:85,lowPrice:70},
//   {Company:'Relicab Cable Manufacturing Ltd.', highPrice:95,lowPrice:70},
//   {Company:'Valiant Organics Ltd.', highPrice:50,lowPrice:55},
//   {Company:'MPS Infotecnics Ltd.', highPrice:95,lowPrice:91},
//   {Company:'Mangalam Organics Ltd.', highPrice:88,lowPrice:88},
//   {Company:'Systematix Corporate Services Ltd.', highPrice:65,lowPrice:68},
//   {Company:'Saregama India Ltd.', highPrice:34,lowPrice:30},
//   {Company:'Stove Kraft Ltd.', highPrice:85,lowPrice:90},
// ]


io.on("connection", (socket) => {
  //console.log(`User Connected: ${socket.id}`);

  setInterval(()=>{
    socket.emit("api",[
      {Company:'Cinevista Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:68},
      {Company:'Diksat Transworld Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:70},
      {Company:'SKP Securities Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:70},
      {Company:'Relicab Cable Manufacturing Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:70},
      {Company:'Valiant Organics Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:55},
      {Company:'MPS Infotecnics Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:91},
      {Company:'Mangalam Organics Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:88},
      {Company:'Systematix Corporate Services Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:68},
      {Company:'Saregama India Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:30},
      {Company:'Stove Kraft Ltd.', highPrice:Math.floor(Math.random() * 101),lowPrice:90},
    ]);
  },1000)

  socket.on('disconnect',()=>{
    //console.log(`User disConnected: ${socket.id}`);
  })
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
