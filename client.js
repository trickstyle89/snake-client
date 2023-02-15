// establishes a connection with the game server
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.on('connect', () => {
    conn.write('Name: ICE');
    console.log("Successfully connected to game server");
  });

  conn.on('data', (data) => {
    console.log("server says:", data);
  });

  conn.setEncoding('utf-8');
  return conn;
};

module.exports = { connect };