import { useState } from "react";
import "./App.css";

function App() {
  const [countOne, setCountOne] = useState(0);

  return (
    <>
      <h1>Contador de un contador reactivo con useState</h1>
      <p>
        Esta es una practica guiada, para entender los conceptos y usos de los
        Hooks useState u useEffect a patrtit de controlar el valor del contador.
      </p>
      <p>
        Qué son estados locales (Como actualizamos contenido para que se
        muestre) y que son los efectos (acciones que se ejecutan cuando el valor
        state cambia)
      </p>

      <section>
        <h2>Contador JS: </h2>
        <h2>Contador de estado</h2>
        <button onClick={() => setCountOne(countOne + 1)}>Incrementar</button>
        <h2>{countOne}</h2>
      </section>
    </>
  );
}

export default App;
