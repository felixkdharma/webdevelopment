import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const apiUrl = "http://localhost:3001";

app.use(express.static("public"));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.post("/home", async (req, res) => {
  const name = req.body["username"];
  console.log(name);

  try {
    // Get User ID from Database
    const response = await axios.post(`${apiUrl}/api/getUser`, {
      username: name,
    });

    const result = response.data;

    if (result.length > 0) {
      res.redirect("/home");
    }
  } catch (error) {
    console.log("Error fetching user");
  }
});

app.get("/home", async (req, res) => {
  try {
    // Get data from Database
    const response = await axios.get(`${apiUrl}/api/getBooks`);
    const result = response.data;
    console.log(result);

    // Get Image Cover from API
    const imageResponse = await axios.get(
      "https://covers.openlibrary.org/b/id/12547191.json"
    );
    const imageResult = imageResponse.data;
    console.log(imageResult);

    res.render("home.ejs", { books: result, image: imageResult });
  } catch (error) {
    console.log("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
