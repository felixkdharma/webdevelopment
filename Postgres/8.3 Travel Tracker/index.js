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
  // console.log(result.rows);
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

app.post("/add", async (req, res) => {

    const country = req.body.country;

    const resultCountryCode = await db.query(`SELECT country_code FROM countries
              WHERE country_name ILIKE $1 LIMIT 1;`, [country]);

    if (resultCountryCode.rows.length !== 0) {
        const getCountryCode = resultCountryCode.rows[0].country_code;

        await db.query(`INSERT INTO visited_countries (country_code)
              VALUES ($1)`, [getCountryCode]);
        total += 1;

    }

    res.redirect("/");
    // console.log(getCountryCode);
    // console.log(resultCountryCode);

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
