import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Busca from "./components/Busca";
import LocalidadeLista from "./components/LocalidadeLista";
import GraficoPizza from "./components/GraficoPizza";
import './App.css'

function App() {
  const [localidades, setLocalidades] = useState([]);

  const adicionarLocalidade = (dados) => {
    const novaLocalidade = {
      cep: dados.cep,
      rua: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
    };

    setLocalidades((prev) => [novaLocalidade, ...prev]);
  };

  return (
    <>
      <h1>Hello, P1</h1>
      <Busca onBuscar={adicionarLocalidade} />
      <GraficoPizza localidades={localidades} />
      <LocalidadeLista localidades={localidades} />
    </>
  );
}

export default App;


