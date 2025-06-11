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

  // Start the test watcher
  const test = spawn('npm', ['run', 'test:server', '--', '--watch'], {
    stdio: 'inherit',
    shell: true,
  });

  // Start the linter
  const lint = spawn('npm', ['run', 'lint', '--', '--watch'], {
    stdio: 'inherit',
    shell: true,
  });

  // Start the type checker
  const typeCheck = spawn('npm', ['run', 'type-check', '--', '--watch'], {
    stdio: 'inherit',
    shell: true,
  });

  // Handle process termination
  process.on('SIGINT', () => {
    client.kill();
    server.kill();
    test.kill();
    lint.kill();
    typeCheck.kill();
    process.exit();
  });
}); 