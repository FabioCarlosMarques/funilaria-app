type StatusFlowProps = {
  etapaAtual: string;
};

const etapas = [
  "Cadastro",
  "Check-list",
  "Aguardando Aprovação",
  "Desmontagem",
  "Levantamento das Peças",
  "Aguardando Peças",
  "Funilaria",
  "Preparação",
  "Pintura",
  "Polimento",
  "Montagem",
  "Lavagem",
  "Check-list Final",
  "Entrega",
  "Veículo Faturado",
];

export default function StatusFlow({
  etapaAtual,
}: StatusFlowProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-6">
        🚗 Fluxo do Veículo
      </h2>

      <div className="space-y-3">
        {etapas.map((etapa) => (
          <div
            key={etapa}
            className={`p-3 rounded-md border ${
              etapa === etapaAtual
                ? "bg-blue-100 border-blue-500 font-bold"
                : "bg-gray-50"
            }`}
          >
            {etapa}
          </div>
        ))}
      </div>
    </div>
  );
}