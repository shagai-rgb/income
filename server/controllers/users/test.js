import { sql } from "../../DATABESE/index.js";
import { v4 as uuid } from "uuid";

export const testController = async (req, res) => {
  //   const { username, email, password } = req.body;
  //   const createdAt = new Date();
  //   const useid = uuid();
  //   await sql`INSERT INTO users(useid, username, email, password, createdAt) VALUES(${useid}, ${username}, ${email}, ${password}, ${createdAt})`;

  const result =
    await sql`SELECT * FROM users ORDER BY createdAt ASC FETCH FIRST 3 ROWS ONLY;`;

  res.send(result);
};
