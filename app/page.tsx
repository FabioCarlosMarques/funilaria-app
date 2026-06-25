 import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex">

      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">
              Veículos em Produção
            </h3>
            <p className="text-3xl font-bold">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">
              Em Pintura
            </h3>
            <p className="text-3xl font-bold">
              4
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">
              Aguardando Peças
            </h3>
            <p className="text-3xl font-bold">
              3
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">
              Veículos Entregues
            </h3>
            <p className="text-3xl font-bold">
              28
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}