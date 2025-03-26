import userService from "../services/userService.js";
import jwt from "jsonwebtoken";
const JWTSecret = "apigamessecret";

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email != undefined) {
      const user = await userService.getOne(email);
      if (user != undefined) {
        if (user.password == password) {
          jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: "48h" },
            (err, token) => {
              if (err) {
                res.status(400).json({ error: "erro ao gerar o token" });
              } else {
                res.status(200).json({ token: token });
              }
            }
          );
        } else {
          res.status(401).json({ error: "credenciais invalidas" });
        }
      } else {
        res.status(404).json({ error: "usuario não encontrado" });
      }
    } else {
      res.status(400).json({ error: "O e-mail enviado é invalido" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export default { createUser, loginUser };
