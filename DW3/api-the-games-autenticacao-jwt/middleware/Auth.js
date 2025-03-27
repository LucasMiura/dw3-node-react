import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função para checagem da autenticação
const Authorization = (req, res, next) => {
  // Coletar o token do cabeçalho da requisição
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    // Dividindo o token
    const bearer = authToken.split(" ");
    const token = bearer[1];
    // Validadndo o token
    jwt.verify(token, userController.JWTSecret, (error, data) => {
      if (error) {
        res.status(401).json({ error: "Token inválido. Não autorizado." + error });
        // Token válido
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Token inválido." });
  }
};
export default { Authorization };
