const { spawn } = require('child_process');
const path = require('path');

// Run server tests
const serverTests = spawn('npm', ['run', 'test:server'], {
  stdio: 'inherit',
  shell: true,
});

serverTests.on('close', (code) => {
  if (code !== 0) {
    console.error('Server tests failed');
    process.exit(1);
  }

  // Run client tests
  const clientTests = spawn('npm', ['run', 'test:client'], {
    stdio: 'inherit',
    shell: true,
  });

  clientTests.on('close', (code) => {
    if (code !== 0) {
      console.error('Client tests failed');
      process.exit(1);
    }
  });
}); 