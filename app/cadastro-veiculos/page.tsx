import Sidebar from "../components/Sidebar";

export default function CadastroVeiculos() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Cadastro de Veículos</h1>

        <div className="bg-white rounded-lg shadow p-8">
          {/* Dados do Cliente */}
          <h2 className="text-xl font-semibold mb-4">Dados do Cliente</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Cliente</label>

              <input type="text" className="w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block mb-2 font-medium">Telefone</label>

              <input type="text" className="w-full border rounded-md p-2" />
            </div>

            {/* Dados do Cliente - Linha 2 */}

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block mb-2 font-medium">Seguradora</label>

                <input type="text" className="w-full border rounded-md p-2" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Número da OS</label>

                <input type="text" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
