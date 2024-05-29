<!-- how_to_run.txt -->
## :floppy_disk: Dev Setup - Backend

* Install dependencies using `npm i`
* Install [nodemon](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Add database access credentials to `db.js` 
* OR
* Install [npm dotenv](https://www.npmjs.com/package/dotenv) & to hide credentials using .env
* PG_USER="postgres"
* PG_PASSWORD="YOUR_PASS_HERE"
* PG_HOST="localhost"
* PG_PORT="5432"
* PG_DATABASE="videogame-db"
* PORT="5000"
* 
* From root run `nodemon server` for a dev server
* Backend can be accessed at `http://localhost:5000/`

## :floppy_disk: Dev Setup - Frontend

* Change to `client` directory
* Install dependencies using `npm i`
* run `npm start` Frontend can be accessed at `http://localhost:3000/`

## :floppy_disk: Extras

* `npm i react-scripts@latest` may be needed