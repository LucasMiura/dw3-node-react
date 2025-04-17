import styles from "@/components/GameList/Gamelist.module.css";
const GameList = ({ games }) => {
  if (games.length === 0) {
    return <p>Não há jogos cadastrados.</p>;
  }

  return (
    <>
      <div>
        <h4 className="title">Lista de jogos:</h4>
        <ol className={styles.items}>
          {/* Iterando sobre a lista de tarefas */}
          {games.map((game) => (
            <>
              <ul key={game.id}>
                <li>{game.title}</li>
                <li>{game.platform}</li>
                <li>{game.genre}</li>
                <li>{game.year}</li>
                <li>{game.price}</li>
              </ul>
              <br />
            </>
          ))}
        </ol>
      </div>
    </>
  );
};

export default GameList;
