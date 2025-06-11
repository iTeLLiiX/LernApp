const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create initial user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: await bcrypt.hash('password123', 10),
        name: 'Test User'
      }
    });

    console.log('Created test user:', user);

    // Create a sample deck
    const deck = await prisma.deck.create({
      data: {
        title: "Sample Deck",
        description: "A sample deck to get started",
        userId: user.id,
        cards: {
          create: [
            {
              front: "What is the capital of France?",
              back: "Paris"
            },
            {
              front: "What is 2 + 2?",
              back: "4"
            }
          ]
        }
      }
    });

    console.log('Created sample deck:', deck);

    // Create progress for the user and deck
    const progress = await prisma.progress.create({
      data: {
        userId: user.id,
        deckId: deck.id,
        score: 0
      }
    });

    console.log('Created progress:', progress);

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 