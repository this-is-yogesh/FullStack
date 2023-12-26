import express from "express";

const app = express();
const PORT = 4000;

app.get("/api/data", (req, res) => {
  const arrayofdata = [
    { id: 1, title: "Title-1", Content: "Content-1" },
    { id: 2, title: "Title-2", Content: "Content-2" },
    { id: 3, title: "Title-3", Content: "Content-3" },
  ];

  res.send(arrayofdata);
});

app.listen(PORT, () => {
  console.log(`welcome to the server http://localhost:${PORT}/`);
});
