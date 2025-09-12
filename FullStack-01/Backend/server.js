import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/api/jokes", (req, res) => {
const joke = [
  {
    id: 1,
    title: "Programming Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Math Joke",
    content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
  },
  {
    id: 3,
    title: "Dad Joke",
    content: "I told my wife she should embrace her mistakes. She gave me a hug."
  },
  {
    id: 4,
    title: "Animal Joke",
    content: "Why don’t cows have any money? Because farmers milk them dry!"
  },
  {
    id: 5,
    title: "School Joke",
    content: "Why was the math book sad? Because it had too many problems."
  }
];

  res.send(joke);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
