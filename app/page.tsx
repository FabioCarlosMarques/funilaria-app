"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import CardDashboard from "./components/CardDashboard";

export default function Home() {
  const [totalVeiculos, setTotalVeiculos] = useState(0);
  const [aguardandoAprovacao, setAguardandoAprovacao] = useState(0);
  const [emProducao, setEmProducao] = useState(0);
  const [emPintura, setEmPintura] = useState(0);
  const [AguardandoPeças, setAguardandoPeças] = useState(0);

  useEffect(() => {
    const veiculosSalvos = localStorage.getItem("veiculos");

    if (veiculosSalvos) {
      const listaVeiculos = JSON.parse(veiculosSalvos);

      const veiculosNoPatio = listaVeiculos.filter(
        (veiculo: { status: string }) => veiculo.status !== "Veículo Faturado",
      );

      setTotalVeiculos(veiculosNoPatio.length);

      const veiculosEmPintura = listaVeiculos.filter(
        (veiculo: { status: string }) => veiculo.status === "Pintura",
      );

      setEmPintura(veiculosEmPintura.length);

      const veiculosAguardandoPeças = listaVeiculos.filter(
  (veiculo: { status: string }) =>
    veiculo.status === "Aguardando Peças",
);

setAguardandoPeças(veiculosAguardandoPeças.length);

      const veiculosAguardandoAprovacao = listaVeiculos.filter(
        (veiculo: { status: string }) =>
          veiculo.status === "Aguardando Aprovação",
      );

      setAguardandoAprovacao(veiculosAguardandoAprovacao.length);

      const veiculosEmProducao = listaVeiculos.filter(
        (veiculo: { status: string }) =>
          [
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
          ].includes(veiculo.status),
      );

      setEmProducao(veiculosEmProducao.length);
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardDashboard
            titulo="Veículos no Pátio"
            quantidade={totalVeiculos}
          />

          <CardDashboard
            titulo="Aguardando Aprovação"
            quantidade={aguardandoAprovacao}
          />

          <CardDashboard
            titulo="Veículos em Produção"
            quantidade={emProducao}
          />

          <CardDashboard titulo="Em Pintura" quantidade={emPintura} />

          <CardDashboard titulo="Aguardando Peças" quantidade={AguardandoPeças} />

          <CardDashboard
            titulo="Veículos Entregues"
            quantidade={totalVeiculos}
          />
        </div>
      </main>
    </div>
  );
}
