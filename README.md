# Flashcard Learning Application

A modern web application for creating and studying flashcards, built with React, TypeScript, Express, and Prisma.

## Features

- User authentication and authorization
- Create, edit, and delete flashcard decks
- Add, edit, and delete flashcards within decks
- Study flashcards with spaced repetition
- Track learning progress
- Modern, responsive UI with Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (v12 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flashcard-app.git
   cd flashcard-app
   ```

2. Install dependencies:
   ```bash
   npm run install:all
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and update the database connection string and JWT secret.

4. Initialize the database:
   ```bash
   npm run migrate
   ```

## Development

Start the development server:
```bash
npm run dev
```

This will start both the client (on port 3000) and server (on port 5000) in development mode.

## Testing

Run tests:
```bash
npm test
```

This will run both client and server tests.

## Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Database Management

- Generate Prisma client:
  ```bash
  npm run prisma:generate
  ```

- Run database migrations:
  ```bash
  npm run prisma:migrate
  ```

- Seed the database:
  ```bash
  npm run db:seed
  ```

## Cleaning Up

Clean up build artifacts and reset the database:
```bash
npm run clean
```

## Project Structure

```
flashcard-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── context/      # React context providers
│   │   ├── types/        # TypeScript type definitions
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
├── server/                # Express backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Express middleware
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   └── tests/            # Server tests
├── prisma/               # Prisma schema and migrations
├── scripts/              # Build and utility scripts
└── shared/              # Shared types and utilities
```

## API Documentation

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Decks

- `GET /api/decks` - Get all decks for the current user
- `POST /api/decks` - Create a new deck
- `GET /api/decks/:id` - Get a specific deck
- `PUT /api/decks/:id` - Update a deck
- `DELETE /api/decks/:id` - Delete a deck

### Cards

- `GET /api/decks/:deckId/cards` - Get all cards in a deck
- `POST /api/decks/:deckId/cards` - Create a new card
- `GET /api/decks/:deckId/cards/:id` - Get a specific card
- `PUT /api/decks/:deckId/cards/:id` - Update a card
- `DELETE /api/decks/:deckId/cards/:id` - Delete a card

### Progress

- `GET /api/progress` - Get learning progress for the current user
- `POST /api/progress` - Update learning progress
- `GET /api/progress/:deckId` - Get progress for a specific deck

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Android APK Build (mit Capacitor)

## Voraussetzungen
- Node.js & npm installiert
- Android Studio installiert (inkl. Android SDK)

## Schritt 1: Capacitor installieren

Im Projektverzeichnis:
```bash
npm install --save @capacitor/core @capacitor/cli
```

## Schritt 2: Capacitor initialisieren

```bash
npx cap init LernApp de.lernapp.pwa --web-dir=client/dist
```
- Name: LernApp
- App ID: de.lernapp.pwa
- Web-Ordner: `client/dist` (hier wird die gebaute PWA abgelegt)

## Schritt 3: Android Plattform hinzufügen

```bash
npx cap add android
```

## Schritt 4: PWA bauen

```bash
cd client
npm run build
cd ..
```

## Schritt 5: Web Assets kopieren

```bash
npx cap copy android
```

## Schritt 6: Android Projekt öffnen

```bash
npx cap open android
```

Android Studio öffnet sich. Hier kannst du die App als APK bauen oder direkt auf ein Gerät/Emulator installieren.

## Hinweise
- Icons und Splashscreen können in `android/app/src/main/res` angepasst werden.
- Für native APIs (z.B. Push, Dateizugriff) Capacitor-Plugins nutzen.
- Die App funktioniert offline wie die PWA (Service Worker bleibt erhalten).

## Troubleshooting
- Nach Änderungen im Web-Code immer `npm run build` und `npx cap copy android` ausführen.
- Bei Problemen mit Permissions oder Netzwerk: AndroidManifest prüfen. 