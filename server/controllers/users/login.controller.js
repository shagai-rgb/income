export const loginController = async (req, res) => {
  const { username, password, email } = req.body;
  res.status(200).send(`login success ${username}, ${password}, ${email}`);
};
