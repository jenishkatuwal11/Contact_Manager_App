const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const connectDB = require("./.config/dbConnection");

connectDB();

const app = express();
const port = process.env.port || 8000;

// Inbuild middleware
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRoutes"));

// Inbuild errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is runing on port ${port}.....`);
});
