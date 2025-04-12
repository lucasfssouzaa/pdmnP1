import { useState } from "react";
import axios from "axios";

function Busca() {
  const [cep, setCep] = useState("");

  const handleClick = async () => {
    const cepLimpo = cep.replace(/\D/g, ""); // remove traços, espaços etc

    if (!cepLimpo) {
      alert("digite um cep");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      
      if (response.data.erro) {
        alert("cep invalido");
        return;
      }

      console.log("Resposta da API viaCEP:", response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("erro ao buscar o cep");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleClick}>OK</button>
    </div>
  );
}

export default Busca;
