import Counter from "@/components/Counter";
import CounterTwo from "@/components/CounterTwo";
import Descriptions from "@/components/Descriptions";
import Dog from "@/components/Dog";
import Form from "@/components/Form";
import Parent from "@/components/Parent";
import TaskList from "@/components/TaskList";
import TrafficLight from "@/components/TrafficLight";
import User from "@/components/User";
import Welcome from "@/components/Welcome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fundamentos do React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world!</h1>
        {/* Comentário em JSX */}
        {/* Chamando o componente */}
        <Welcome />
        {/* Importando o componente User que possui uma expressão JSX */}
        <User />
        {/* Componente pai que possui um componente filho incorporado */}
        <Parent />
        {/* Chamando o componente e passando as props para o mesmo: */}
        <Descriptions name="Lucas" age={29} />
        {/* Usando a desestruturação para passar props */}
        <Dog name="Rex" breed="Pitbull" />
        {/* Contador */}
        <Counter />
        <br />
        <CounterTwo />
        <br />
        <br />
        {/* Semáforo (estados) */}
        <TrafficLight />
        <br />
        <br />
        {/* Formulário */}
        <Form />
        <br />
        <br />
        {/* Passando a lista de tarefas por PROPS */}
        <TaskList
          tasks={[
            {
              id: 1,
              text: "Estudar Reackt",
            },
            {
              id: 2,
              text: "Pagar os boletos",
            },
            {
              id: 3,
              text: "Tirar o lixo",
            },
            {
              id: 4,
              text: "Lavar roupa",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
