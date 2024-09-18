import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const tokenSecret = "key";
import fs from "fs";

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

  const token = jwt.sign({ username: user.username }, tokenSecret, {
    expiresIn: "5m",
  });

  res.status(200).send({ success, user });
};
