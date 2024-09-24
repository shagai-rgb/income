import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "dotenv";
import fs from "fs";

env.config();

export const loginController = async (req, res) => {
  const { password, email } = req.body;
  const success = true;
  const resultJson = fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => el.email === email);
  if (!user) {
    success == false;
    res.status(400).send("Username or password wrong");
    return;
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400).send("Username or password wrong");
    return;
  }

  const token = jwt.sign({ userId: user.userId }, process.env.SECRET, {
    expiresIn: "1d",
  });

  res.status(200).send({ massage: success, user, token });
};
