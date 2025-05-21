import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countOne, setCountOne] = useState(0);
  const [booleano, setBooleano] = useState(false);

  useEffect(() => {
    if (countOne === 5) {
      alert("El contador es 5");
    }
  }, [countOne]);

  useEffect(() => {
    console.log("Bienvenido al contador");
  });

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

        <h1 className={booleano ? "color1" : "color2"}>Titulo a cambiar</h1>
        <button onClick={() => setBooleano(!booleano)}>Cambiar color</button>
      </section>

      <section>
        <h1>Estilos con Tailwind CSS</h1>
        <p>
          Esta es una practica guiada, para entender los conceptos y usos de los
          Hooks useState u useEffect a patrtit de controlar el valor del
          contador.
        </p>
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-red-900">
          Click me
        </button>
        <div className="bg-red-500 w-1/2 h-1/2">
          <h1>Hola</h1>
        </div>
      </section>
    </>
  );
}

export default App;
