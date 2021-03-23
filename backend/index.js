const express = require("express");
const { errorHandler, notFound } = require("./handlers");

const app = express();
const port = 4000;

app.get("/", (req, res) => res.json({ Greet: "Hello World" }));

app.use(notFound);

app.use(errorHandler);

app.listen(port, console.log(`Server started on port ${port}`));
