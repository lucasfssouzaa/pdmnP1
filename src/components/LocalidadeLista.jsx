import { Card } from "primereact/card";

function LocalidadeLista({ localidades }) {
  return (
    <div>
      {localidades.map((localidade, index) => (
        <Card key={index}>
          <div style={styles.card}>
          <p><strong>CEP:</strong> {localidade.cep}</p>
            <p><strong>Rua:</strong> {localidade.rua}</p>
            <p><strong>Bairro:</strong> {localidade.bairro}</p>
            <p><strong>Cidade:</strong> {localidade.cidade}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default LocalidadeLista;
