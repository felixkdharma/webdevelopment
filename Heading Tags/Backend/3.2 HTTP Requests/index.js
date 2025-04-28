import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(
    "<h1> Welcome Felix Kurniawan Dharma! </h1>" +
      "<button> <a href='/about'>About Me </a> </button>"
  );
});

app.get("/about", (req, res) => {
  res.send("<h2> This is all about Felix Kurniawan Dharma </h2>");
});
