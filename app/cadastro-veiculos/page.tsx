import Sidebar from "../components/Sidebar";
import InputField from "../components/InputField";

export default function CadastroVeiculos() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Cadastro de Veículos
        </h1>

        {/* ========================= */}
        {/* DADOS DO CLIENTE */}
        {/* ========================= */}

        <div className="bg-white rounded-lg shadow p-6 mb-8">

          <h2 className="text-xl font-bold mb-6">
            👤 Dados do Cliente
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <InputField label="Cliente" />

            <InputField label="Telefone" />

            <InputField label="Seguradora" />

            <InputField label="Número da OS" />

          </div>

        </div>

        {/* ========================= */}
        {/* DADOS DO VEÍCULO */}
        {/* ========================= */}

        <div className="bg-white rounded-lg shadow p-6 mb-8">

          <h2 className="text-xl font-bold mb-6">
            🚗 Dados do Veículo
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <InputField label="Placa" />

            <InputField label="Marca" />

            <InputField label="Modelo" />

            <InputField label="Cor" />

            <InputField label="Ano" type="number" />

            <InputField label="KM" type="number" />

          </div>

        </div>

        {/* ========================= */}
        {/* INFORMAÇÕES DA OFICINA */}
        {/* ========================= */}

        <div className="bg-white rounded-lg shadow p-6">

          <h2 className="text-xl font-bold mb-6">
            🏭 Informações da Oficina
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <InputField label="Status" />

            <InputField label="Consultor Responsável" />

            <InputField
              label="Data de Entrada"
              type="date"
            />

            <InputField
              label="Previsão de Entrega"
              type="date"
            />

          </div>

        </div>

      </main>

    </div>
  );
}