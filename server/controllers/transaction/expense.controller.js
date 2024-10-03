import { sql } from "../../DATABESE/index.js";
import { v4 as uuidv4 } from "uuid";

export const expenseController = async (req, res) => {
  const { userId } = res.locals;
  const expense = req.body;
  const { amount, category, date, note } = expense;

  const user = await sql(`SELECT * FROM users WHERE useid='${userId}'`);

  const recordId = uuidv4();

  const balance = user[0].balance - amount;

  await sql`UPDATE users SET balance=${balance} WHERE useid=${userId}`;

  await sql`INSERT INTO records(recordiD, useid, balance, expense, category, date, note) VALUES(${recordId}, ${userId}, ${balance}, ${amount} , ${category}, ${date}, ${note})`;

  res.status(201).send("success category post");
};
