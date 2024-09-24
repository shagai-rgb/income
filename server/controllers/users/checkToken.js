import jwt from "jsonwebtoken";
export const checkToken = async (req, res) => {
  const { token } = req.params;
  jwt.verify(token, process.env.SECRET, (err, suc) => {
    if (err) {
      res.status(200).send(false);
      return;
    } else {
      res.status(200).send(true);
    }
  });
};
