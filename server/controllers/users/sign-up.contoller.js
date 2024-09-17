export const signUpController = async (req, res) => {
  const { username, password, email } = req.body;
  res.status(200).send(`signup success ${username}, ${password}, ${email}`);
};
