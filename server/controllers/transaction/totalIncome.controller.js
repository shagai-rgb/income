import { sql } from "../../DATABESE/index.js";

export const totalIncomeController = async (req, res) => {
  const { userId } = res.locals;

  const user = await sql(`SELECT * FROM records WHERE useid='${userId}'`);

  let total = 0;
  user.map((el) => {
    if (el.income) {
      total = total + Number(el.income);
    }
  });

  res.status(201).send(`${total}`);
};
