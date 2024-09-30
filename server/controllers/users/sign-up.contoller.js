import bcrypt from "bcryptjs";
import { sql } from "../../DATABESE/index.js";
import { v4 as uuidv4 } from "uuid";

export const signUpController = async (req, res) => {
  const { username, password, email } = req.body;

  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.length) {
    res.status(401).send("email burtgeltei bna");
    return;
  }

  const userId = uuidv4();
  const createdAt = new Date();
  const hashedPassword = bcrypt.hashSync(password, 10);

  await sql`INSERT INTO users(useid, username, email, password, createdAt) VALUES(${userId}, ${username}, ${email}, ${hashedPassword}, ${createdAt})`;

  res.status(200).send("success");
};
