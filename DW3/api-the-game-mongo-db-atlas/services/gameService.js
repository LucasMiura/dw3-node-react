import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  //     //sucesso
  // }).catch(error => {
  //     //falha
  // })

  // async / await
  // Função para listar os jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar jogos
  async Create(title, year, price, descriptions) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        descriptions,
      });
      //   Método do mongoose para cadastrar .save()
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
