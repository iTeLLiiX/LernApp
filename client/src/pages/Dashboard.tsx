import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth-context';
import {
  saveDecks,
  loadDecks,
  addToSyncQueue,
  getSyncQueue,
  removeFromSyncQueue
} from '../lib/localStorageUtil';

interface Deck {
  id: string;
  title: string;
  description: string | null;
  cards: Card[];
}

interface Card {
  id: string;
  question: string;
  answer: string;
}

/**
 * Dashboard-Komponente: Unterstützt vollständigen Offline-Modus und Synchronisation.
 * - Lädt Decks zuerst aus IndexedDB, dann vom Server (und speichert sie offline).
 * - Deck-Erstellung/Löschung wird offline in eine Sync-Queue geschrieben und bei Online-Synchronisation ausgeführt.
 */
export default function Dashboard() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newDeck, setNewDeck] = useState({ title: '', description: '' });
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
    fetchDecks();
    syncIfNeeded();
    // eslint-disable-next-line
  }, []);

  /**
   * Synchronisiert lokale Änderungen mit dem Server, wenn online.
   */
  const syncIfNeeded = async () => {
    if (!navigator.onLine) return;
    const queue = await getSyncQueue();
    for (const entry of queue) {
      try {
        if (entry.type === 'createDeck') {
          await fetch('http://localhost:3001/api/decks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(entry.payload),
          });
        } else if (entry.type === 'deleteDeck') {
          await fetch(`http://localhost:3001/api/decks/${entry.payload.deckId}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        await removeFromSyncQueue(entry.id);
      } catch (err) {
        // Fehler beim Sync, bleibt in Queue
      }
    }
    // Nach Sync Decks neu laden
    fetchDecks();
  };

  /**
   * Lädt Decks: Zuerst offline, dann online (und speichert sie offline)
   */
  const fetchDecks = async () => {
    // 1. Versuche offline
    const offlineDecks = await loadDecks();
    if (offlineDecks && offlineDecks.length > 0) {
      setDecks(offlineDecks);
    }
    // 2. Versuche online
    if (navigator.onLine) {
      try {
        const response = await fetch('http://localhost:3001/api/decks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch decks');
        const data = await response.json();
        setDecks(data);
        // Speichere Decks offline
        await saveDecks(data);
      } catch (error) {
        // Fehler beim Online-Fetch, bleibe bei Offline-Daten
      }
    }
  };

  /**
   * Erstellt ein neues Deck (offline oder online)
   */
  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!navigator.onLine) {
      // Offline: In Sync-Queue speichern
      await addToSyncQueue({ type: 'createDeck', payload: newDeck });
      // Lokal hinzufügen
      const offlineDecks = await loadDecks();
      await saveDecks([...offlineDecks, { ...newDeck, id: Date.now().toString(), cards: [] }]);
      setIsCreating(false);
      setNewDeck({ title: '', description: '' });
      fetchDecks();
      return;
    }
    // Online: Wie bisher
    try {
      const response = await fetch('http://localhost:3001/api/decks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newDeck),
      });
      if (!response.ok) throw new Error('Failed to create deck');
      await fetchDecks();
      setIsCreating(false);
      setNewDeck({ title: '', description: '' });
    } catch (error) {
      // Fehlerbehandlung
    }
  };

  /**
   * Löscht ein Deck (offline oder online)
   */
  const handleDeleteDeck = async (deckId: string) => {
    if (!navigator.onLine) {
      // Offline: In Sync-Queue speichern
      await addToSyncQueue({ type: 'deleteDeck', payload: { deckId } });
      // Lokal löschen
      const offlineDecks = await loadDecks();
      await saveDecks(offlineDecks.filter(deck => deck.id !== deckId));
      fetchDecks();
      return;
    }
    // Online: Wie bisher
    try {
      const response = await fetch(`http://localhost:3001/api/decks/${deckId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete deck');
      await fetchDecks();
    } catch (error) {
      // Fehlerbehandlung
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Flashcard App</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={logout}
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Decks</h2>
            <button
              onClick={() => setIsCreating(true)}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Create New Deck
            </button>
          </div>

          {isCreating && (
            <div className="bg-white shadow sm:rounded-lg mb-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Create New Deck
                </h3>
                <form onSubmit={handleCreateDeck} className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={newDeck.title}
                        onChange={(e) =>
                          setNewDeck({ ...newDeck, title: e.target.value })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        value={newDeck.description}
                        onChange={(e) =>
                          setNewDeck({ ...newDeck, description: e.target.value })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsCreating(false)}
                      className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <div
                key={deck.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {deck.title}
                  </h3>
                  {deck.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {deck.description}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    {deck.cards.length} cards
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="flex justify-between">
                    <button
                      onClick={() => navigate(`/deck/${deck.id}`)}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Study
                    </button>
                    <button
                      onClick={() => handleDeleteDeck(deck.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
