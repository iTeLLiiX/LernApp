// Utility für lokale Offline-Speicherung (localStorage, erweiterbar auf IndexedDB)

import Dexie, { Table } from 'dexie';
// import { logger } from '@/lib/logger'; // TODO: Logger-Modul importieren, wenn vorhanden

/**
 * Dexie-Datenbank für Offline-Speicherung von Lern-App-Daten
 */
export class LernAppDB extends Dexie {
  flashcards!: Table<any, number>;
  questions!: Table<any, number>;
  glossary!: Table<any, number>;
  syncQueue!: Table<any, number>;
  decks?: Table<any, number>;

  constructor() {
    super('LernAppDB');
    this.version(1).stores({
      flashcards: '++id,deckId',
      questions: '++id',
      glossary: '++id',
      syncQueue: '++id,type',
      decks: '++id',
    });
  }
}

export const db = new LernAppDB();

/**
 * Speichert Flashcards offline in IndexedDB
 * @param {any[]} flashcards - Array von Flashcard-Objekten
 * @returns {Promise<void>}
 */
export async function saveFlashcards(flashcards: any[]): Promise<void> {
  // logger.info('Saving flashcards offline', { count: flashcards.length });
  await db.flashcards.clear();
  await db.flashcards.bulkAdd(flashcards);
}

/**
 * Lädt alle Flashcards aus IndexedDB
 * @returns {Promise<any[]>} Array von Flashcards
 */
export async function loadFlashcards(): Promise<any[]> {
  // logger.info('Loading flashcards from offline storage');
  return db.flashcards.toArray();
}

/**
 * Speichert Fragen offline in IndexedDB
 * @param {any[]} questions - Array von Fragen
 * @returns {Promise<void>}
 */
export async function saveQuestions(questions: any[]): Promise<void> {
  // logger.info('Saving questions offline', { count: questions.length });
  await db.questions.clear();
  await db.questions.bulkAdd(questions);
}

/**
 * Lädt alle Fragen aus IndexedDB
 * @returns {Promise<any[]>} Array von Fragen
 */
export async function loadQuestions(): Promise<any[]> {
  // logger.info('Loading questions from offline storage');
  return db.questions.toArray();
}

/**
 * Speichert Glossar offline in IndexedDB
 * @param {any[]} glossary - Array von Glossar-Einträgen
 * @returns {Promise<void>}
 */
export async function saveGlossary(glossary: any[]): Promise<void> {
  // logger.info('Saving glossary offline', { count: glossary.length });
  await db.glossary.clear();
  await db.glossary.bulkAdd(glossary);
}

/**
 * Lädt Glossar aus IndexedDB
 * @returns {Promise<any[]>} Array von Glossar-Einträgen
 */
export async function loadGlossary(): Promise<any[]> {
  // logger.info('Loading glossary from offline storage');
  return db.glossary.toArray();
}

/**
 * Fügt einen Eintrag zur Sync-Queue hinzu (für spätere Synchronisation mit Server)
 * @param {object} entry - Zu synchronisierender Eintrag (z.B. {type, payload})
 * @returns {Promise<void>}
 */
export async function addToSyncQueue(entry: { type: string; payload: any }): Promise<void> {
  // logger.info('Adding entry to sync queue', { type: entry.type });
  await db.syncQueue.add(entry);
}

/**
 * Holt alle Einträge aus der Sync-Queue
 * @returns {Promise<any[]>} Array von Sync-Operationen
 */
export async function getSyncQueue(): Promise<any[]> {
  return db.syncQueue.toArray();
}

/**
 * Löscht einen Eintrag aus der Sync-Queue nach erfolgreicher Synchronisation
 * @param {number} id - ID des Eintrags
 * @returns {Promise<void>}
 */
export async function removeFromSyncQueue(id: number): Promise<void> {
  await db.syncQueue.delete(id);
}

/**
 * Speichert Decks offline in IndexedDB
 * @param {any[]} decks - Array von Deck-Objekten
 * @returns {Promise<void>}
 */
export async function saveDecks(decks: any[]): Promise<void> {
  await db.decks?.clear();
  await db.decks?.bulkAdd(decks);
}

/**
 * Lädt alle Decks aus IndexedDB
 * @returns {Promise<any[]>} Array von Decks
 */
export async function loadDecks(): Promise<any[]> {
  return db.decks?.toArray() || [];
} 