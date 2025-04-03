import { useState } from "react";

const CounterTwo = () => {

//  Criando o estado para o contador
// [consultar o valor, função para alterar o estado]
const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <br />
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
        <br />
        <button onClick={() => setCount(0)}>Zerar</button>
      </div>
    </>
  );
};
export default CounterTwo;
