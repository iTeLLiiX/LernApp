import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

// Get cards for a deck
router.get('/deck/:deckId', authenticateToken, async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      where: { deckId: req.params.deckId }
    });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
});

// Create new card
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { front, back, deckId } = req.body;
    const card = await prisma.card.create({
      data: {
        front,
        back,
        deckId
      }
    });
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create card' });
  }
});

// Update card
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { front, back } = req.body;
    const card = await prisma.card.update({
      where: { id: req.params.id },
      data: { front, back }
    });
    res.json(card);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update card' });
  }
});

// Delete card
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.card.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete card' });
  }
});

export default router; 