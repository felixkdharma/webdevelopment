import express from "express";
import pg from "pg";

const port = 3001;
const app = express();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "capstone",
  password: "170899",
  port: 5432,
});

db.connect();

app.use(express.json());
// Admin yang dapat menambah, menghapus, dan mengedit buku
app.post("/api/getUser", async (req, res) => {
  try {
    const { username } = req.body;

    const result = await db.query(`SELECT id FROM users WHERE name = $1`, [
      username,
    ]);

    res.json(result.rows);
  } catch (error) {
    res.status(404).json({ error: "Error fetching user" });
  }
});

app.get("/api/getBooks", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (error) {
    res.status(404).json({ error: "Error fetching books" });
  }
});

app.post("/api/addBook", async (req, res) => {
  try {
    const { title, user_id, page, category, img_url } = req.body;

    const result = await db.query(
      `INSERT INTO books (title, user_id, isread, page, category, img_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, user_id, false, page, category, img_url]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error adding book" });
  }
});

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
