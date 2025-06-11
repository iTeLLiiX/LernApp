import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth-context';
import {
  saveFlashcards,
  loadFlashcards,
  addToSyncQueue,
  getSyncQueue,
  removeFromSyncQueue
} from '../lib/localStorageUtil';

interface Card {
  id: string;
  question: string;
  answer: string;
}

interface Deck {
  id: string;
  title: string;
  description: string | null;
  cards: Card[];
}

/**
 * DeckStudy-Komponente: Unterstützt vollständigen Offline-Modus und Synchronisation.
 * - Lädt Decks zuerst aus IndexedDB, dann vom Server (und speichert sie offline).
 * - Karten-Erstellung/Löschung wird offline in eine Sync-Queue geschrieben und bei Online-Synchronisation ausgeführt.
 */
export default function DeckStudy() {
  const [deck, setDeck] = useState<Deck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newCard, setNewCard] = useState({ question: '', answer: '' });
  const { token } = useAuth();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
    fetchDeck();
    syncIfNeeded();
    // eslint-disable-next-line
  }, [id]);

  /**
   * Synchronisiert lokale Änderungen mit dem Server, wenn online.
   */
  const syncIfNeeded = async () => {
    if (!navigator.onLine) return;
    const queue = await getSyncQueue();
    for (const entry of queue) {
      try {
        if (entry.type === 'createCard') {
          await fetch(`http://localhost:3001/api/cards/deck/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(entry.payload),
          });
        } else if (entry.type === 'deleteCard') {
          await fetch(`http://localhost:3001/api/cards/${entry.payload.cardId}`, {
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
    // Nach Sync Deck neu laden
    fetchDeck();
  };

  /**
   * Lädt das Deck: Zuerst offline, dann online (und speichert es offline)
   */
  const fetchDeck = async () => {
    // 1. Versuche offline
    const offlineCards = await loadFlashcards();
    if (offlineCards && offlineCards.length > 0) {
      setDeck({ id: id || '', title: '', description: null, cards: offlineCards });
    }
    // 2. Versuche online
    if (navigator.onLine) {
      try {
        const response = await fetch(`http://localhost:3001/api/decks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch deck');
        const data = await response.json();
        setDeck(data);
        // Speichere Karten offline
        if (data.cards) await saveFlashcards(data.cards);
      } catch (error) {
        // Fehler beim Online-Fetch, bleibe bei Offline-Daten
      }
    }
  };

  /**
   * Erstellt eine neue Karte (offline oder online)
   */
  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!navigator.onLine) {
      // Offline: In Sync-Queue speichern
      await addToSyncQueue({ type: 'createCard', payload: newCard });
      // Lokal hinzufügen
      const offlineCards = await loadFlashcards();
      await saveFlashcards([...offlineCards, { ...newCard, id: Date.now().toString() }]);
      setIsCreating(false);
      setNewCard({ question: '', answer: '' });
      fetchDeck();
      return;
    }
    // Online: Wie bisher
    try {
      const response = await fetch(`http://localhost:3001/api/cards/deck/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newCard),
      });
      if (!response.ok) throw new Error('Failed to create card');
      await fetchDeck();
      setIsCreating(false);
      setNewCard({ question: '', answer: '' });
    } catch (error) {
      // Fehlerbehandlung
    }
  };

  /**
   * Löscht eine Karte (offline oder online)
   */
  const handleDeleteCard = async (cardId: string) => {
    if (!navigator.onLine) {
      // Offline: In Sync-Queue speichern
      await addToSyncQueue({ type: 'deleteCard', payload: { cardId } });
      // Lokal löschen
      const offlineCards = await loadFlashcards();
      await saveFlashcards(offlineCards.filter(card => card.id !== cardId));
      fetchDeck();
      return;
    }
    // Online: Wie bisher
    try {
      const response = await fetch(`http://localhost:3001/api/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete card');
      await fetchDeck();
    } catch (error) {
      // Fehlerbehandlung
    }
  };

  const handleNext = () => {
    if (deck && currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  if (!deck) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">{deck.title}</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {deck.cards.length > 0 ? (
            <div className="max-w-3xl mx-auto">
              <div
                className="bg-white shadow-lg rounded-lg p-8 cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {isFlipped
                      ? deck.cards[currentCardIndex].answer
                      : deck.cards[currentCardIndex].question}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Click to {isFlipped ? 'show question' : 'show answer'}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentCardIndex === 0}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-gray-500">
                  {currentCardIndex + 1} of {deck.cards.length}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentCardIndex === deck.cards.length - 1}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-500">No cards in this deck yet.</p>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={() => setIsCreating(true)}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Add New Card
            </button>
          </div>

          {isCreating && (
            <div className="mt-4 bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Add New Card
                </h3>
                <form onSubmit={handleCreateCard} className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="question"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Question
                      </label>
                      <input
                        type="text"
                        id="question"
                        value={newCard.question}
                        onChange={(e) =>
                          setNewCard({ ...newCard, question: e.target.value })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="answer"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Answer
                      </label>
                      <textarea
                        id="answer"
                        value={newCard.answer}
                        onChange={(e) =>
                          setNewCard({ ...newCard, answer: e.target.value })
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows={3}
                        required
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
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">All Cards</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {deck.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-lg font-medium text-gray-900">
                      {card.question}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">{card.answer}</p>
                  </div>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <button
                      onClick={() => handleDeleteCard(card.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 