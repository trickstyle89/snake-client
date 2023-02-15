const { connect } = require("./client");

const conn = connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'd') {
    conn.write("Move: right");
  } else if (key === 'h') {
    conn.write("Say: Too slow ");
  } else if (key === 'j') {
    conn.write("Say: What's up");
  } else if (key === 'k') {
    conn.write("Say: Nice try");
  } else if (key === 'l') {
    conn.write("Say: I win");
  }
};

setupInput();

module.exports = { setupInput };