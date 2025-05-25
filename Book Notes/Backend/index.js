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

app.get("/api/getBooks", async (req, res) => {


    try {

        const result = await db.query("SELECT * FROM books");
        res.json(result.rows);

    } catch (error) {
        res.status(404).json({error: "Error fetching books"});
    }

})

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
})