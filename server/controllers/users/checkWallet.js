import fs from "fs";

export const checkWallet = async (req, res) => {
  const { userId } = res.locals;
  console.log(userId);

  const user = await sql(`SELECT * FROM users WHERE useid='${userId}'`);

  // if (!user.wallet) {
  //   res.status(200).send(false);
  //   return;
  // }

  res.status(200).send(user);
};
