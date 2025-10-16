## AI-Kontext & Projektleitlinien

Diese Datei beschreibt Präferenzen, Arbeitsprinzipien und Projektkontext zur Zusammenarbeit mit einem AI-Coding-Assistenten und für menschliche Reviewer. Bitte berücksichtigen, bevor Code geschrieben oder Reviews erstellt werden.

### Sprache & Kommunikation

- Bevorzugte Sprache: Deutsch (User sitzt in Deutschland, Nähe Stuttgart)
- Antworten: ausführlich, klar, technisch präzise, mit Hinweisen auf Risiken/Edge-Cases

### Leitprinzipien

- Qualität vor Tempo: pragmatische, hochwertige, langfristig sinnvolle Lösungen
- Modern & zukunftssicher: aktuelle Best Practices, keine veralteten Patterns
- Wartbarkeit & Erweiterbarkeit: klare Strukturen, modulare Architektur
- Saubere Typisierung: TypeScript strikt nutzen; möglichst keine `any`s
- Proaktive Risiken: auf Stolperfallen früh hinweisen; defensive Programmierung

### Tech-Stack

- React Native + TypeScript
- Expo (Entwicklung & Build-Pipeline)
- SQLite (lokal/Entwicklung), MySQL (Produktion)
- Externe API berechnet Ankaufspreise

### Projektkontext

- Übungsapp: dient als sauberes, modernes Fundament nach Best Practices
- Projektarbeit (MVP, erste Ausbaustufe):
  - Barcode-Scanner
  - Login & Registrierung
  - Einfaches Interface (ohne kompletten Ankaufsprozess)
- Spätere Erweiterungen: z. B. direkter Bücherkauf in der App

### Architektur & Struktur (Empfehlungen)

- Feature/Domain-First-Organisation oder klar getrennte Layer (`screens/`, `components/`, `services/`, `hooks/`, `context/`, `navigation/`, `theme/`, `i18n/`, `utils/`, `types/`)
- Zustände: minimal, nahe an der Quelle; gemeinsame Zustände via Context/Zustandslib
- Navigation: klare Typisierung der Routen; Deep Linking vorbereiten
- i18n: Schlüssel konsistent benennen; Fallbacks und Pluralisierung berücksichtigen
- Theme: zentrale Tokens (`colors`, `spacing`, `typography`); Dark-Mode früh mitdenken

### Code-Style & Qualität

- TypeScript streng: explizite Typen für öffentliche APIs, Props, Rückgaben
- Benennung: sprechend, konsistent, keine Abkürzungen ohne Not
- Fehlerbehandlung: klare User-Feedbacks, Logging differenziert (Debug/Info/Warn/Error)
- Side Effects kapseln (Services/Hooks), UI-Komponenten möglichst rein (pure)
- Keine toten/duplicaten Codepfade; kleine, fokussierte Funktionen/Komponenten

### Tests & Stabilität (wo sinnvoll bei RN)

- Unit-Tests für Logik (z. B. Utils, Services)
- Komponententests für kritische UI (z. B. Scanner-Flow, Auth-Form)
- E2E-Pfade für Hauptnutzerfluss (später bei Reifegrad)

### Performance & Mobile-Spezifika

- Rendering optimieren (Memoization, FlatList/SectionList, virtuelle Listen)
- Bilder/Caching, Splash/Startup-Zeit, Bundle-Größe beachten
- Rechte/Permissions (Kamera/Scanner) robust abfragen und kommunizieren

### Sicherheit & Daten

- Secrets nicht im Client; ENV/Build-Time-Configs nutzen
- Netzwerkfehler, Timeouts, Retries, Backoff, Offline-Strategien einplanen
- Eingaben validieren (z. B. bei Registrierung/Login)

### Kollaboration

- Commits: klein, beschreibend; konventionelles Schema empfohlen (z. B. Conventional Commits)
- PRs: kurze Beschreibung, Motivation, Screenshots/GIFs bei UI, Testhinweise
- Code-Reviews: Fokus auf Lesbarkeit, Korrektheit, Wartbarkeit, Edge-Cases

### Hinweise zu typischen Risiken

- Scanner-Zuverlässigkeit: unterschiedliche Geräte/Belichtung testen; Fallbacks/Retry-Flows
- Plattformunterschiede iOS/Android: Berechtigungen, Kamera-APIs, Build-Configs
- API-Kopplung: robuste Schema-/Fehlerbehandlung; Versionierung der API beachten
- Lokale DB vs. Server: spätere Migration/Sync-Strategie berücksichtigen

Stand: automatisch erstellt für dieses Repo. Bei Änderungen bitte ergänzen/aktualisieren.
