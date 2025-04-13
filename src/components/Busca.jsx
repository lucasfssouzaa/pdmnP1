import { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

class Busca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ cep: e.target.value });
  };

  handleClick = async () => {
    const { cep } = this.state;
    if (!cep) {
      alert("Digite um CEP válido.");
      return;
    }

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        alert("CEP não encontrado.");
        return;
      }

      this.props.onBuscar(dados);
      this.setState({ cep: "" }); // limpa o campo
    } catch (error) {
      alert("Erro ao buscar CEP.");
      console.error(error);
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <span className="p-input-icon-left" style={{ width: "100%" }}>
          <i className="pi pi-search" style={{marginLeft: "10px"}}/>
          <InputText
            value={this.state.cep}
            onChange={this.handleInputChange}
            placeholder="Digite o CEP"
            style={styles.input}
          />
        </span>
        <Button
          label="Adicionar localidade"
          icon="pi pi-plus"
          className="p-button-sm p-button-outlined"
          onClick={this.handleClick}
          style={styles.button}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "300px",
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    paddingLeft: "2rem",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    marginTop: "10px",
    height: "25px",
    backgroundColor: "#007ad9",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};

export default Busca;
