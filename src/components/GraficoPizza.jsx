import { Chart } from 'primereact/chart';

function GraficoPizza({ localidades }) {
  // Conta quantos por estado
  const contagemEstados = localidades.reduce((acc, loc) => {
    const uf = loc.uf;
    if (uf) {
      acc[uf] = (acc[uf] || 0) + 1;
    }
    return acc;
  }, {});

  const estados = Object.keys(contagemEstados);
  const total = localidades.length;

  // Se não tem nenhum endereço ainda, nem renderiza o gráfico
  if (total === 0) {
    return <div style={{ height: "300px" }}></div>; // só reserva espaço
  }

  const dadosGrafico = {
    labels: estados,
    datasets: [
      {
        data: estados.map((uf) => contagemEstados[uf]),
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#EC407A', '#FF7043'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#F48FB1', '#FF8A65']
      }
    ]
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <Chart type="pie" data={dadosGrafico} />
    </div>
  );
}

export default GraficoPizza;
