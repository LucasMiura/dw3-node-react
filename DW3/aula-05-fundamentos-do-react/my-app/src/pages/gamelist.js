import GameList from "@/components/GameList";
import Head from "next/head";

// Criar Array de objetos:
// 05 jogos com os dados: title, platform, genre, year, price
// Utilizar o CSS modularizado e o global

export default function Game() {
  return (
    <>
      <Head>
        <title>Lista de jogos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world!</h1>
        <GameList
          games={[
            {
              id: 1,
              title: "The Legend of Zelda: Tears of the Kingdom",
              platform: "Nintendo Switch",
              genre: "Action-Adventure",
              year: 2023,
              price: 59.99,
            },
            {
              id: 2,
              title: "Elden Ring",
              platform: "PlayStation 5",
              genre: "RPG",
              year: 2022,
              price: 69.99,
            },
            {
              id: 3,
              title: "God of War Ragnarök",
              platform: "PlayStation 5",
              genre: "Action",
              year: 2022,
              price: 69.99,
            },
            {
              id: 4,
              title: "Starfield",
              platform: "Xbox Series X",
              genre: "Sci-Fi RPG",
              year: 2023,
              price: 69.99,
            },
            {
              id: 5,
              title: "Hades",
              platform: "PC",
              genre: "Roguelike",
              year: 2020,
              price: 24.99,
            },
          ]}
        />
      </main>
    </>
  );
}
