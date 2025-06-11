const { spawn } = require('child_process');
const path = require('path');

// Build the client
const buildClient = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
});

buildClient.on('close', (code) => {
  if (code !== 0) {
    console.error('Client build failed');
    process.exit(1);
  }

  // Start the server
  const server = spawn('npm', ['run', 'start'], {
    stdio: 'inherit',
    shell: true,
  });

  // Handle process termination
  process.on('SIGINT', () => {
    server.kill();
    process.exit();
  });
}); 