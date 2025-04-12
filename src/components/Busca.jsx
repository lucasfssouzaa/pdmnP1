import { useState } from "react";

function Busca() {
  const [cep, setCep] = useState("");

  const handleClick = () => {
    alert(`CEP digitado: ${cep}`);
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
