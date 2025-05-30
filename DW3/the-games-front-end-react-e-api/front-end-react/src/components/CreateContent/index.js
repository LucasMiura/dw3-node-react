import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/CreateContent/CreateContent.module.css";
import axios from "axios";
import { axiosConfig } from "@/services/auth";

const CreateContent = () => {
  // Criando os estados para as informações do jogo
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  // Carregando o router
  const router = useRouter();

  // Tratando a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    // VALIDAÇÃO DO FORMULÁRIO (CAMPOS VAZIOS)
    if (title && platform && genre && rating && year && price !== "") {
      const game = {
        title: title,
        year: year,
        price: price,
        descriptions: {
          platform: platform,
          genre: genre,
          rating: rating,
        },
      };
      // FAZENDO POST NA API PARA CADASTRO
      try {
        const response = await axios.post(
          "http://localhost:4000/games", 
          game,
          axiosConfig        
        );
        if (response.status === 201) {
          alert("Game cadastrado com sucesso!");
          router.push("/home");
        }
      } catch (error) {
        console.log(error);
      }
      // console.log(game)
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChange={(e) => setPlatform(e.target.value)}
          value={platform}
        />
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o gênero do jogo"
          className="inputPrimary"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira a classificação do jogo"
          className="inputPrimary"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
      <div style={{ color: "white" }}>
        {title} <br />
        {platform} <br />
        {genre} <br />
        {rating} <br />
        {year} <br />
        {price} <br />
      </div>
    </div>
  );
};

export default CreateContent;
