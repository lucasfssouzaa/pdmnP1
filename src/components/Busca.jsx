import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Busca({ onBuscar }) {
  const [cep, setCep] = useState("");

  const handleClick = async () => {
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

      onBuscar(dados);
      setCep(""); // limpa o campo após adicionar
    } catch (error) {
      alert("Erro ao buscar CEP.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <span className="p-input-icon-left" style={{ width: "100%" }}>
        <i className="pi pi-search" />
        <InputText
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
          style={styles.input}
        />
      </span>
      <Button
        label="Adicionar localidade"
        icon="pi pi-plus"
        className="p-button-sm p-button-outlined"
        onClick={handleClick}
        style={styles.button}
      />
    </div>
  );
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
