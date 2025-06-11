const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean up build artifacts
const cleanBuild = () => {
  const dirs = [
    'dist',
    'client/dist',
    'client/build',
    'node_modules',
    'client/node_modules',
  ];

  dirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      console.log(`Removing ${dir}...`);
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
};

// Clean up database
const cleanDatabase = () => {
  try {
    console.log('Cleaning up database...');
    execSync('npx prisma migrate reset --force', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error cleaning up database:', error);
  }
};

// Clean up everything
const cleanAll = () => {
  cleanBuild();
  cleanDatabase();
};

cleanAll(); 