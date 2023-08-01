const express = require("express");
const db = require("./db");
const adminsRoute = require("./modules/admins/_api");
const booksRoute = require("./modules/books/_api");
const publishersRoute = require("./modules/publishers/_api");
const authorsRoute = require("./modules/authors/_api");
const loansRoute = require("./modules/loans/_api");
const borrowersRoute = require("./modules/borrowers/_api");
const errorMiddlewareFunc = require("./shared/errors/error");
const updateLoanStatus = require("./modules/loans/update-loan-status");
const { port } = require("./shared/config");

const app = express();

app.use(express.json());

app.use(errorMiddlewareFunc);

app.use(adminsRoute);
app.use(booksRoute);
app.use(publishersRoute);
app.use(authorsRoute);
app.use(borrowersRoute);
app.use(loansRoute);
//Har 24 soatda ijaralarni tekshiradi
setInterval(updateLoanStatus, 24 * 60 * 60 * 3600);

db();
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlayapti.`);
});
