const express = require("express");
const db = require("./db");
const config = require("./shared/config");
const { errorMiddlewareFunc } = require("./shared/errors");
const adminsRoute = require("./modules/admins/_api");
const booksRoute = require("./modules/books/_api");
const publishersRoute = require("./modules/publishers/_api");
const authorsRoute = require("./modules/authors/_api");
const loansRoute = require("./modules/loans/_api");
const borrowersRoute = require("./modules/borrowers/_api");

const app = express();

app.use(express.json());
app.use(errorMiddlewareFunc);

app.use(adminsRoute);
app.use(booksRoute);
app.use(publishersRoute);
app.use(authorsRoute);
app.use(borrowersRoute);
app.use(loansRoute);

db();
app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
