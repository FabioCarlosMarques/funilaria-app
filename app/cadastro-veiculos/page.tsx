import Sidebar from "../components/Sidebar";

export default function CadastroVeiculos() {
  return (
    <div className="min-h-screen flex">

      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100">

        <h1 className="text-3xl font-bold mb-8">
          Cadastro de Veículos
        </h1>

        <div className="bg-white p-8 rounded-lg shadow">

          <p>
            Aqui será desenvolvido o formulário de cadastro dos veículos.
          </p>

        </div>

      </main>

    </div>
  );
}