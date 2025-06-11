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

  // Run migrations
  const migrate = spawn('npm', ['run', 'prisma:migrate'], {
    stdio: 'inherit',
    shell: true,
  });

  migrate.on('close', (code) => {
    if (code !== 0) {
      console.error('Database migration failed');
      process.exit(1);
    }

    // Seed the database
    const seed = spawn('npm', ['run', 'db:seed'], {
      stdio: 'inherit',
      shell: true,
    });

    seed.on('close', (code) => {
      if (code !== 0) {
        console.error('Database seeding failed');
        process.exit(1);
      }
    });
  });
}); 