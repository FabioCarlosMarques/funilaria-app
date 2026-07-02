 import Sidebar from "./components/Sidebar";
 import CardDashboard from "./components/CardDashboard";

export default function Home() {
  return (
    <div className="min-h-screen flex">

      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <CardDashboard
  titulo="Veículos em Produção"
  quantidade={12}
/>

<CardDashboard
  titulo="Em Pintura"
  quantidade={4}
/>

<CardDashboard
  titulo="Aguardando Peças"
  quantidade={3}
/>

<CardDashboard
  titulo="Veículos Entregues"
  quantidade={28}
/>

          </div>
      </main>
    </div>
      
  );
}