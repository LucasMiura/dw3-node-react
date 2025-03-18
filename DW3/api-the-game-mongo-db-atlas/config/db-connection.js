// Importando o mongoose
import mongoose from "mongoose";
// Usuário e senha do banco de dados
const dbUser = "lucasnmiura";
const dbPassword = "tFwuvNTa8BnaWUAB";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.o5zhy.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar ao mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;
