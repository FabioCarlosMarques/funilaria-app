"use client";

import StatusFlow from "../components/StatusFlow";
import CheckboxGroup from "../components/CheckboxGroup";
import SelectField from "../components/SelectField";
import Sidebar from "../components/Sidebar";
import InputField from "../components/InputField";

export default function CadastroVeiculos() {
  function salvarVeiculo() {
    alert("✅ Veículo cadastrado com sucesso!");
  }
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Cadastro de Veículos</h1>

        {/* ========================= */}
        {/* DADOS DO CLIENTE */}
        {/* ========================= */}

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">👤 Dados do Cliente</h2>

          <div className="grid grid-cols-2 gap-6">
            <InputField label="Cliente" />

            <InputField label="Telefone" />

            <InputField label="Seguradora" />

            <InputField label="Número da OS" />
          </div>

          {/* NOVO CARD - ATENDIMENTO */}

          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">📋 Atendimento</h2>

            <div className="grid grid-cols-2 gap-6">
              <SelectField
                label="Tipo de Atendimento"
                options={["Seguradora", "Particular", "Loja / Semi-Novo"]}
              />

              <SelectField
                label="Prioridade"
                options={["Normal", "Urgente", "Super Urgente"]}
              />
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* DADOS DO VEÍCULO */}
        {/* ========================= */}

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">🚗 Dados do Veículo</h2>

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
          <h2 className="text-xl font-bold mb-6">🏭 Informações da Oficina</h2>

          <div className="grid grid-cols-2 gap-6">
            <InputField label="Status" />

            <InputField label="Consultor Responsável" />

            <InputField label="Data de Entrada" type="date" />

            <InputField label="Previsão de Entrega" type="date" />
          </div>

          <StatusFlow etapaAtual="Aguardando Aprovação" />

          <CheckboxGroup
            titulo="📦 Check-list de Entrada"
            itens={[
              "Chave Principal",
              "Chave Reserva",
              "Documento",
              "Manual",
              "Estepe",
              "Macaco",
              "Chave de Roda",
              "Triângulo",
              "Rádio",
              "Multimídia",
              "Tapetes",
              "Calotas",
            ]}
          />

          <div className="mt-8 flex justify-end">
            <button
              onClick={salvarVeiculo}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              💾 Salvar Veículo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
