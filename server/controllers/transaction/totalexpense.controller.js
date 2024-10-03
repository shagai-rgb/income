import { sql } from "../../DATABESE/index.js";

export const totalExpenseController = async (req, res) => {
  const { userId } = res.locals;

  const user = await sql(`SELECT * FROM records WHERE useid='${userId}'`);

  let total = 0;

  user.map((el) => {
    if (el.expense) {
      total = total + Number(el.expense);
    }
  });

  res.status(201).send(`${total}`);
};
