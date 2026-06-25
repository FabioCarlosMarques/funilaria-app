export default function Sidebar() {
  return (
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
  );
}