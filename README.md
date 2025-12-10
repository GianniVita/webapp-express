<!-- Esercizio
Ciao Classe, è ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa! Ecco i primi step

Utilizzando il file in allegato, creiamo un database con MySQL Workbench
Creiamo una nuova applicazione Express
Colleghiamo l’app al db e verifichiamo che tutto funzioni
Prepariamo una rotta index per ottenere la lista dei film
Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni

Bonus
Inserire le immagini nel progetto express
Inserire i dati di connessione al database come variabili d’ambiente
Inserire le vostre API in controller
Inserire le vostre rotte in un router
Inserire un middleware per le rotte inesistenti
Inserire un middleware per la gestione errori -->

## webapp for movies

Un'app di `movies` in cui si potranno lasciare `recensione` pubbliche

### Schema di Passaggi

### 1. Database Setup
1. [x] Create tables schema and ER-diagram
2. [x] Add database and tables usando workbench
3. [x] Per la lista dei film e reviews usiamo il DB passato dall'insegnante
4. [] Verify database connection and test queries

### 2. Project Setup
5. [] Initializiation npm project (`npm init -y`)
6. [] Install dependencies:
    - [] `npm install express mysql2`
    - [] `npm install dotenv` (per le variabili d'ambiente)
    - [] `npm install --save-dev nodemon` (pe rdevelopment)

7. [] create project structure:
    ```
    /webapp-express
|-- server-js
|-- .env
|-- .gitignore
|-- package. json
|--/config
|-— db.js
|--/controllers
   -- movieController.js
|--/routers
    |- movieRouter-js
|--/middlewares
    |-- notFound. js
    |--errorHandler-js
    |--/public
        |-- /images
    ```

### 3. Configuration
8.  [] Create '.env' file with database credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=movies_db
PORT=3000
9. [ ] Create '•gitignore" file (add node_modules, -env)
10. [ ] Setup database connection in '/config/db.js'
11. [ ] Test database connection

### 4. Express Application Setup
12. [ ] Create `server.js` with basic Express setup
13. [ ] Add body parser middleware (`express.json()`)
14. [ ] Add middleware for static assets (`express.static('public')`)
14. [ ] Add root route(`/`)
15. [ ] Test server startup

### 5. Routes a& Controllers
17. [ ] Create `/routers/movieRouters.js` with routes:
    - [ ] GET `/api/movies` - lista di tutti i film
    - [ ] GET `/api/movies/ :id` - dettagli di un singolo film con recensioni
18. [ ] Create `/controllers/movies`

 