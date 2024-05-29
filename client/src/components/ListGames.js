import React, { Fragment, useState, useEffect } from "react";
import EditGame from "./EditGame";

const ListGames = () => {
  const [games, setGames] = useState([]);

  async function deleteGame(id) {
    try {
      await fetch(`/games/${id}`, {
        method: "DELETE",
      });

      setGames(games.filter((game) => game.game_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getGames() {
    const res = await fetch("/games");
    const gameArray = await res.json();
    setGames(gameArray);
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Year</th> 
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.game_id}>
              <td>{game.description}</td>
              <td>{game.year}</td>
              <td>
                <EditGame game={game} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteGame(game.game_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListGames;
