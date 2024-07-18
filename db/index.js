// Crear conexión a la base de datos
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "monorail.proxy.rlwy.net",
  port: 57052,
  user: "root",
  password: "yNcMxHnsnlucLqMktbHkVhvjGjArtnTl",
  database: "railway",
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

export default connection;
