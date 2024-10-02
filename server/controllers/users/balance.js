import { sql } from "../../DATABESE/index.js";

export const balance = async (req, res) => {
  const { userId } = res.locals;
  const user = await sql(`SELECT * FROM users WHERE useid='${userId}'`);

  res.status(200).send(user[0].balance);
};
