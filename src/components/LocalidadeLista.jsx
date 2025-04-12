import { Card } from "primereact/card";

function LocalidadeLista({ localidades }) {
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
