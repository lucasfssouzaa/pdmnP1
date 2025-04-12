import { Card } from "primereact/card";

function LocalidadeLista() {
  const localidades = [
    { cep: "04094-050", rua: "Avenida Pedro Álvares Cabral", bairro: "Parque Ibirapuera", cidade: "São Paulo - SP" },
    { cep: "55592-970", rua: "Rua dos Navegantes", bairro: "Vila de Porto de Galinhas", cidade: "Ipojuca - PE" },
  ];

  return (
    <div>
      {localidades.map((localidade, index) => (
        <Card key={index} title={`CEP: ${localidade.cep}`}>
          <p><strong>Rua:</strong> {localidade.rua}</p>
          <p><strong>Bairro:</strong> {localidade.bairro}</p>
          <p><strong>Cidade:</strong> {localidade.cidade}</p>
        </Card>
      ))}
    </div>
  );
}

export default LocalidadeLista;
