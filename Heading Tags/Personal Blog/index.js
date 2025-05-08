import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

// app.set('view engine', 'ejs');
app.use(express.static("views"));
app.use(express.static("public"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {data});
    // console.log(req.body.index);
});

app.post("/submit", (req, res) => {

    const {username, posts}  = req.body;

    data.push({user: username, post: posts});

    res.redirect("/");
    // res.render("index.ejs", {data});

});

app.post("/delete", (req, res) => {

    const index = parseInt(req.body.index);
    
    data.splice(index, 1);

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const data = [
    {
        user: "Benjamin09", post: ` I am really confused, why they are not using the same font for all the headings? 
                                    If i were you, i would not do that so far. Its gonna break their heart.
                                    Since i have moved to Jakarta, i feel kinda diffrent. My hometown not always so crowded and noisy`
    },

    {
        user: "Susy_Smith", post: `I cannot wait for 9th of Mei 2025. There is a big event in Jakarta and i am so excited to celebrate it with my friends.
                                   The event is organized by SAMA. SAMA is an event organizer that is veery popular in Jakarta. The crew is very profressional 
                                   and they are so friendly.` 
    },
    {
        user: "JohnDoe11", post: `I am really sad, because my parents gonna break up. How do you fill when your loved ones are not together anymore?`
    }
]