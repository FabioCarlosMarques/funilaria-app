 export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-slate-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Funilaria App
        </h1>

        <nav>
          <ul className="space-y-4">
            <li>📊 Dashboard</li>
            <li>👤 Clientes</li>
            <li>🚗 Veículos</li>
            <li>📋 Ordens de Serviço</li>
            <li>🔧 Produção</li>
            <li>📈 Relatórios</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          Bem-vindo ao Funilaria App
        </h2>

        <p>
          Sistema de gerenciamento para oficinas de
          funilaria e pintura.
        </p>
      </main>
    </div>
  );
}