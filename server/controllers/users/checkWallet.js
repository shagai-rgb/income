import fs from "fs";

export const checkWallet = async (req, res) => {
  const { userId } = res.locals;

  const resultJson = fs.readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const { users } = result;
  const user = users.find((el) => el.userId == userId);

  if (!user.wallet) {
    res.status(200).send(false);
    return;
  }

  res.status(200).send(true);
};
