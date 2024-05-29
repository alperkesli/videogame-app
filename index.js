const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

// process.env.NODE_ENV => production or undefined

// middleware
app.use(cors());
app.use(express.json()); // req.body

if (process.env.NODE_ENV === "production") {
  // service static content
  // npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

// ROUTES

// get all games
app.get("/games", async (req, res) => {
  try {
    const allGames = await pool.query("SELECT * from game");
    res.status(200).json(allGames.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a game
app.get("/games/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await pool.query("SELECT * FROM game WHERE game_id = $1", [
      id,
    ]);
    res.status(200).json(game.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a game
app.post("/games", async (req, res) => {
  try {
    const { description } = req.body;
    const newGame = await pool.query(
      "INSERT INTO game (description) VALUES($1) RETURNING *",
      [description]
    );

    res.status(200).json(newGame.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a game
app.put("/games/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query(
      "UPDATE game SET description = $1 WHERE game_id = $2",
      [description, id]
    );

    res.status(200).json("game was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a game
app.delete("/games/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM game WHERE game_id = $1", [
      id,
    ]);
    res.status(200).json("game was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
