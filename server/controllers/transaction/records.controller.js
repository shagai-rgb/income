import { sql } from "../../DATABESE/index.js";

export const recordsController = async (req, res) => {
  const { userId } = res.locals;

  const user = await sql(`SELECT * FROM records WHERE useid='${userId}'`);

  res.status(201).send(user);
};
