import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "170899",
  port: 5432,
});

// let visitedCountries = [];
let total = 0;

db.connect();

// db.query("SELECT country_code FROM visited_countries", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     visitedCountries = res.rows;
//   }
//   db.end();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });

  // db.end();

  // if (visitedCountries.length === 0) {
  //   res.render("index.ejs", { message: "No countries visited yet." });
  // } else {
  //   const countryCodes = visitedCountries.map(
  //     (country) => country.country_code
  //   );
  //   res.render("index.ejs", {
  //     countries: countryCodes,
  //     total: total,
  //   });
  //   console.log(countryCodes);
  // }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
