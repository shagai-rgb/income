import fs from "fs";
import { sql } from "../../DATABESE/index.js";

export const userWallet = async (req, res) => {
  const { currency, balance } = req.body;
  const { userId } = res.locals;

  await sql`UPDATE users SET currency=${currency} , balance=${balance} WHERE useid=${userId}`;

  res.status(200).send("success");
};
