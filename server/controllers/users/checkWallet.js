import fs from "fs";
import { sql } from "../../DATABESE/index.js";

export const checkWallet = async (req, res) => {
  const { userId } = res.locals;
  const user = await sql(`SELECT * FROM users WHERE useid='${userId}'`);

  if (user[0].currency && user[0].balance) {
    res.status(200).send(user);
    return;
  }
  res.status(200).send(false);
};
