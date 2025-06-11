const { spawn } = require('child_process');
const path = require('path');

// Install server dependencies
const installServer = spawn('npm', ['install'], {
  stdio: 'inherit',
  shell: true,
});

installServer.on('close', (code) => {
  if (code !== 0) {
    console.error('Server dependencies installation failed');
    process.exit(1);
  }

  // Install client dependencies
  const installClient = spawn('npm', ['install'], {
    stdio: 'inherit',
    shell: true,
    cwd: path.join(__dirname, '..', 'client'),
  });

  installClient.on('close', (code) => {
    if (code !== 0) {
      console.error('Client dependencies installation failed');
      process.exit(1);
    }

    // Generate Prisma client
    const generatePrisma = spawn('npm', ['run', 'prisma:generate'], {
      stdio: 'inherit',
      shell: true,
    });

    generatePrisma.on('close', (code) => {
      if (code !== 0) {
        console.error('Prisma client generation failed');
        process.exit(1);
      }
    });
  });
}); 