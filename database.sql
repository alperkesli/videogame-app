-- db can be created under this name
-- CREATE DATABASE videogame-db;

-- can be needed for populated data
-- CREATE TABLE tmp (
--     game_id INTEGER,
--     description TEXT,
--     Platform TEXT,
--     Year INTEGER,
--     Genre TEXT,
--     Publisher TEXT,
--     NA_Sales FLOAT,
--     EU_Sales FLOAT,
--     JP_Sales FLOAT,
--     Other_Sales FLOAT,
--     Global_Sales FLOAT
-- );

-- 123.csv has actual data can be inserted to db
-- COPY tmp (game_id, description, Platform, Year, Genre, Publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales, Global_Sales)
-- FROM 'path\to\123.csv'
-- DELIMITER ','
-- CSV HEADER
-- NULL '(null)';

-- other necessary tables
CREATE TABLE game(
  game_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE TABLE game (
    game_id SERIAL PRIMARY KEY,
    description TEXT,
    platform TEXT,
    year INTEGER,
    genre TEXT,
    publisher TEXT
);

INSERT INTO game (game_id, description, platform, year, genre, publisher)
SELECT DISTINCT game_id, description, platform, year, genre, publisher
FROM tmp order by game_id

CREATE TABLE sale (
    sale_id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES game(game_id) ON DELETE CASCADE ON UPDATE CASCADE,
    na_sales FLOAT,
    eu_sales FLOAT,
    jp_sales FLOAT,
    other_sales FLOAT,
    global_sales FLOAT
);

INSERT INTO sale (sale_id, game_id, NA_Sales, EU_Sales, JP_Sales, Other_Sales, Global_Sales)
SELECT game_id, game_id, NA_Sales, EU_Sales, JP_Sales, Other_Sales, Global_Sales
FROM tmp order by game_id


