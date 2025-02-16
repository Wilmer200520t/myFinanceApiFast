import express from "express";
import mysql from "../db/index.js";
import cors from "cors";

const app = express();
const port = 3000;
const db = mysql;
app.use(express.json());
app.use(cors());

app.post("/sql/get", (req, res) => {
  const { query } = req.body;

  db.query(query, (err, rows) => {
    if (err) {
      console.error("Error executing query:", err);
      res.json({ err });
      res.status(500);
      return;
    }
    res.json(rows);
  });
});

app.post("/sql", (req, res) => {
  const { query } = req.body;
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.json({ err });
      res.status(500);
      return;
    }
    res.json({ id: result.insertId });
  });
});

app.put("/sql", (req, res) => {
  const { query } = req.body;
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.json({ err });
      res.status(500);
      return;
    }

    res.json({ id: result.insertId });
  });
});

app.delete("/sql", (req, res) => {
  const { query } = req.body;

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.json({ err });
      res.status(500);
      return;
    }

    res.json({ id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
