import express, { Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth.js';

interface AuthRequest extends Request {
  user?: { userId: string };
}

const router = express.Router();
const prisma = new PrismaClient();

// Get all decks for user
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const decks = await prisma.deck.findMany({
      where: { userId: req.user?.userId },
      include: { cards: true }
    });
    res.json(decks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch decks' });
  }
});

// Create new deck
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { title, description } = req.body;
    if (!req.user?.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const deck = await prisma.deck.create({
      data: {
        title,
        description,
        userId: req.user.userId
      }
    });
    res.status(201).json(deck);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create deck' });
  }
});

// Get a specific deck
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const deck = await prisma.deck.findUnique({
      where: {
        id: req.params.id
      },
      include: {
        cards: true,
        progress: true
      }
    });

    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }

    res.json(deck);
  } catch (error) {
    console.error('Error fetching deck:', error);
    res.status(500).json({ message: 'Error fetching deck' });
  }
});

// Update a deck
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const deck = await prisma.deck.update({
      where: {
        id: req.params.id
      },
      data: {
        title,
        description
      }
    });
    res.json(deck);
  } catch (error) {
    console.error('Error updating deck:', error);
    res.status(500).json({ message: 'Error updating deck' });
  }
});

// Delete deck
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    await prisma.deck.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete deck' });
  }
});

export default router; 