// Utility für lokale Offline-Speicherung (localStorage, erweiterbar auf IndexedDB)

export function saveToLocal<T>(key: string, data: T) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // Fehlerbehandlung (z.B. Speicher voll)
    // TODO: IndexedDB als Fallback
  }
}

export function loadFromLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw) as T;
    return fallback;
  } catch (e) {
    return fallback;
  }
}

// Beispiel: Aufgaben offline speichern
export function saveQuestions(questions: any[]) {
  saveToLocal('lern-app-questions', questions);
}

export function loadQuestions(): any[] {
  return loadFromLocal('lern-app-questions', []);
}

// Beispiel: Glossar offline speichern
export function saveGlossary(glossary: any[]) {
  saveToLocal('lern-app-glossary', glossary);
}

export function loadGlossary(): any[] {
  return loadFromLocal('lern-app-glossary', []);
}

// Beispiel: Lernkarten offline speichern
export function saveFlashcards(flashcards: any[]) {
  saveToLocal('lern-app-flashcards', flashcards);
}

export function loadFlashcards(): any[] {
  return loadFromLocal('lern-app-flashcards', []);
} 