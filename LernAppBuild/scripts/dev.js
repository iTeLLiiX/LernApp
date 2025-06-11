const { spawn } = require('child_process');
const path = require('path');

// Start the client
const client = spawn('npm', ['run', 'dev:client'], {
  stdio: 'inherit',
  shell: true,
});

// Start the server
const server = spawn('npm', ['run', 'dev:server'], {
  stdio: 'inherit',
  shell: true,
});

// Handle process termination
process.on('SIGINT', () => {
  client.kill();
  server.kill();
  process.exit();
}); 