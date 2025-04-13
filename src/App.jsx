import { Component } from "react";
import Busca from "./components/Busca";
import LocalidadeLista from "./components/LocalidadeLista";
import GraficoPizza from "./components/GraficoPizza";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localidades: [],
    };

    this.adicionarLocalidade = this.adicionarLocalidade.bind(this);
  }

  adicionarLocalidade(dados) {
    const novaLocalidade = {
      cep: dados.cep,
      rua: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
    };

    this.setState((prevState) => ({
      localidades: [novaLocalidade, ...prevState.localidades],
    }));
  }

  render() {
    return (
      <>
        <h1>Hello, P1</h1>
        <Busca onBuscar={this.adicionarLocalidade} />
        <GraficoPizza localidades={this.state.localidades} />
        <LocalidadeLista localidades={this.state.localidades} />
      </>
    );
  }
}

export default App;
