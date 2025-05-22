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
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-indigo-900 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            Contador Reactivo con Hooks
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Esta es una práctica guiada para entender los conceptos y usos de
            los Hooks useState y useEffect a partir de controlar el valor del
            contador.
          </p>
        </div>

        {/* Counter Section */}
        <section className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contador de Estado
            </h2>
            <div className="text-6xl font-bold text-indigo-600 mb-6">
              {countOne}
            </div>
            <button
              onClick={() => setCountOne(countOne + 1)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Incrementar
            </button>
          </div>
        </section>

        {/* Color Toggle Section */}
        <section className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cambio de Color
            </h2>
            <h1
              className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                booleano ? "text-purple-600" : "text-pink-600"
              }`}
            >
              Título a cambiar
            </h1>
            <button
              onClick={() => setBooleano(!booleano)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Cambiar color
            </button>
          </div>
        </section>

        {/* Tailwind Demo Section */}
        <section className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Demo Tailwind CSS
            </h2>
            <p className="text-gray-600 mb-6">
              Demostración de estilos con Tailwind CSS y efectos interactivos
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Click me
            </button>
            <div className="mt-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-2xl font-bold text-white">Hola</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
