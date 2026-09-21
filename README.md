# Goodreads

Det här är en inlämningsuppgift i JavaScript 2. Uppgiften är att skapa en förenklad version av Goodreads med hjälp av JavaScript och Firebase Realtime Database.

I applikationen kan användaren lägga till böcker med titel och författare. Böckerna sparas i Firebase och visas på sidan. Användaren kan markera böcker som läst/oläst, ta bort böcker samt sätta betyg mellan 1-5, men endast om boken är läst.

## Kodstruktur

- `src/classes/Book.js` innehåller `Book`-klassen som hanterar information och funktioner för varje bok.
- `src/components/displayBook.js` skapar och visar bokkorten på sidan samt hanterar knapparnas funktioner.
- `src/services/firebase.js` innehåller funktionerna för att hämta, lägga till, uppdatera och ta bort böcker i Firebase.
- `src/main.js` startar applikationen och hanterar formuläret samt laddar in böcker från databasen.
- `src/style.css` innehåller sidans design och responsiva layout.
- `index.html` innehåller sidans HTML-struktur och HTML-mallen för ett bokkort.

## Resurser

- Github: [BE26-js2-goodreads-alice-danielsson](https://github.com/alidan39/BE26-js2-goodreads-alice-danielsson)
- Netlify: [Goodreads](https://goodreads-alice-danielsson.netlify.app/)
- Firebase: [Firebase](https://firebase.google.com/)
