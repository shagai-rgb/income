import bcrypt from "bcryptjs";

import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const signUpController = async (req, res) => {
  const { username, password, email } = req.body;
  const resultJson = fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  const userId = uuidv4();
  const users = result.users.find((el) => el.email === email);
  if (users) {
    res.status(400).send("email burtgeltei bna");
    return;
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  result.users.push({ userId, username, email, password: hashedPassword });

  await fs.writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  res.status(200).send(result.users);
};
