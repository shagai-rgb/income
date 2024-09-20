import fs from "fs";

export const userWallet = async (req, res) => {
  const { currency, balance } = req.body;
  const resultJson = fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  const { users } = result;
  const user = users.find((el) => el.username == "123");
  if (user) {
    Object.assign(user, { wallet: { currency, balance } });
  }
  await fs.writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  res.status(200).send("success");
};
