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
  tipoAtendimento: string;
  status: string;
  consultor: string;
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
    tipoAtendimento: "",
    status: "",
    consultor: "",
  });

  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [veiculoSelecionado, setVeiculoSelecionado] = useState<Veiculo | null>(
    null,
  );

  function salvarVeiculo() {
    setVeiculos([...veiculos, veiculo]);
    alert(
      `Veículo cadastrado com sucesso!\n\nCliente: ${veiculo.cliente}\nPlaca: ${veiculo.placa}\nMarca: ${veiculo.marca}\nModelo: ${veiculo.modelo}\nCor: ${veiculo.cor}\nAno: ${veiculo.ano}\nKM: ${veiculo.km}`,
    );
  }
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main
        className="flex-1 min-h-screen p-8 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/fundo_funilariaApp.png')",
        }}
      >
        f<h1 className="text-3xl font-bold mb-8">Cadastro de Veículos</h1>
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
                value={veiculo.tipoAtendimento}
                onChange={(e) =>
                  setVeiculo({
                    ...veiculo,
                    tipoAtendimento: e.target.value,
                  })
                }
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
            <SelectField
              label="Status"
              options={[
                "Aguardando Aprovação",
                "Aprovado",
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
              ]}
              value={veiculo.status}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  status: e.target.value,
                })
              }
            />

            <InputField
              label="Consultor Responsável"
              value={veiculo.consultor}
              onChange={(e) =>
                setVeiculo({
                  ...veiculo,
                  consultor: e.target.value,
                })
              }
            />

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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Placa</th>
                    <th className="border p-3 text-left">Cliente</th>
                    <th className="border p-3 text-left">Veículo</th>
                    <th className="border p-3 text-left">Cor</th>
                    <th className="border p-3 text-left">Ano</th>
                    <th className="border p-3 text-left">KM</th>
                    <th className="border p-3 text-left">Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {veiculos.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border p-3">{item.placa}</td>

                      <td className="border p-3">{item.cliente}</td>

                      <td className="border p-3">
                        {item.marca} {item.modelo}
                      </td>

                      <td className="border p-3">{item.cor}</td>

                      <td className="border p-3">{item.ano}</td>

                      <td className="border p-3">{item.km}</td>
                      <td className="border p-3">
                        <button
                          type="button"
                          onClick={() => setVeiculoSelecionado(item)}
                          className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                        >
                          👁️ Ver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {veiculoSelecionado && (
          <div className="bg-white rounded-lg shadow p-6 mt-8">
            <h2 className="text-xl font-bold mb-6">📋 Detalhes do Veículo</h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Cliente</p>
                <p className="font-semibold">{veiculoSelecionado.cliente}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Placa</p>
                <p className="font-semibold">{veiculoSelecionado.placa}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Marca</p>
                <p className="font-semibold">{veiculoSelecionado.marca}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Modelo</p>
                <p className="font-semibold">{veiculoSelecionado.modelo}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Cor</p>
                <p className="font-semibold">{veiculoSelecionado.cor}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Ano</p>
                <p className="font-semibold">{veiculoSelecionado.ano}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">KM</p>
                <p className="font-semibold">{veiculoSelecionado.km}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tipo de Atendimento</p>
                <p className="font-semibold">
                  {veiculoSelecionado.tipoAtendimento}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold">{veiculoSelecionado.status}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Consultor Responsável</p>
                <p className="font-semibold">{veiculoSelecionado.consultor}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
