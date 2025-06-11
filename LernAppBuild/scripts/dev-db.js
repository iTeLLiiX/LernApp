const { spawn } = require('child_process');
const path = require('path');

// Generate Prisma client
const generate = spawn('npm', ['run', 'prisma:generate'], {
  stdio: 'inherit',
  shell: true,
});

generate.on('close', (code) => {
  if (code !== 0) {
    console.error('Prisma client generation failed');
    process.exit(1);
  }

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
}); 
 