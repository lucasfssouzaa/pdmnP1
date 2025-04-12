import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Busca from "./components/Busca";
import LocalidadeLista from "./components/LocalidadeLista";
import './App.css'


function App() {
  return (
    <div>
      <h1>Hello, P1</h1>
      <Busca />
      <LocalidadeLista />
    </div>

  );
}

export default App;

