const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.047.243' , // IP address here,
    port: 50541// PORT number here,
  });

  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("data:", (data) => {
    console.log("server says: ", data);
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };