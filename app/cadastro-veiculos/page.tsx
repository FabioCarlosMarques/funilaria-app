"use client";

import { useState } from "react";
import StatusFlow from "../components/StatusFlow";
import CheckboxGroup from "../components/CheckboxGroup";
import SelectField from "../components/SelectField";
import Sidebar from "../components/Sidebar";
import InputField from "../components/InputField";

type Veiculo = {
  cliente: string;
  placa: string;
  marca: string;
  modelo: string;
  cor: string;
  ano: string;
  km: string;
};

export default function CadastroVeiculos() {
  const [veiculo, setVeiculo] = useState<Veiculo>({
    cliente: "",
    placa: "",
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    km: "",
  });

  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  function salvarVeiculo() {
    setVeiculos([...veiculos, veiculo]);
    alert(
      `Veículo cadastrado com sucesso!\n\nCliente: ${veiculo.cliente}\nPlaca: ${veiculo.placa}\nMarca: ${veiculo.marca}\nModelo: ${veiculo.modelo}\nCor: ${veiculo.cor}\nAno: ${veiculo.ano}\nKM: ${veiculo.km}`,
    );
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
            <InputField
              label="Cliente"
              value={veiculo.cliente}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  cliente: e.target.value,
                })
              }
            />

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
            <InputField
              label="Placa"
              value={veiculo.placa}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  placa: e.target.value,
                })
              }
            />

            <InputField
              label="Marca"
              value={veiculo.marca}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  marca: e.target.value,
                })
              }
            />

            <InputField
              label="Modelo"
              value={veiculo.modelo}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  modelo: e.target.value,
                })
              }
            />

            <InputField
              label="Cor"
              value={veiculo.cor}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  cor: e.target.value,
                })
              }
            />

            <InputField
              label="Ano"
              type="number"
              value={veiculo.ano}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  ano: e.target.value,
                })
              }
            />

            <InputField
              label="KM"
              type="number"
              value={veiculo.km}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  km: e.target.value,
                })
              }
            />
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
        {/* ========================= */}
        {/* VEÍCULOS CADASTRADOS */}
        {/* ========================= */}

        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-bold mb-6">🚗 Veículos Cadastrados</h2>

          {veiculos.length === 0 ? (
            <p className="text-gray-500">Nenhum veículo cadastrado.</p>
          ) : (
            <div className="space-y-4">
              {veiculos.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <p>
                    <strong>Cliente:</strong> {item.cliente}
                  </p>

                  <p>
                    <strong>Placa:</strong> {item.placa}
                  </p>

                  <p>
                    <strong>Marca:</strong> {item.marca}
                  </p>

                  <p>
                    <strong>Modelo:</strong> {item.modelo}
                  </p>

                  <p>
                    <strong>Cor:</strong> {item.cor}
                  </p>

                  <p>
                    <strong>Ano:</strong> {item.ano}
                  </p>

                  <p>
                    <strong>KM:</strong> {item.km}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
