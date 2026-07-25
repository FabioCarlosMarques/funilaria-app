import Sidebar from "../components/Sidebar";
import InputField from "../components/InputField";

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
            <div className="grid grid-cols-2 gap-6">
              <InputField label="Cliente" />

              <InputField label="Telefone" />
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
              <hr className="my-8" />

              <h2 className="text-xl font-semibold mb-4">Dados do Veículo</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Placa</label>

                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Marca</label>

                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-2 font-medium">Modelo</label>

                  <input type="text" className="w-full border rounded-md p-2" />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Cor</label>

                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-2 font-medium">Ano</label>

                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">KM</label>

                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block mb- font-medium">Status</label>

                    <input
                      type="select"
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Data de Entrada
                    </label>

                    <input
                      type="number"
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <div className="grid grid-cols-10 gap-30 mt-7">
                    <div>
                      <label className="block mb-2 font-medium">
                        Previsão de Entrega
                      </label>

                      <input
                        type="date"
                        className="w-full border rounded-md p-5"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">
                        Consultor Responsável
                      </label>

                      <input
                        type="text"
                        className="w-full border rounded-md p-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
