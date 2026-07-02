type CardDashboardProps = {
  titulo: string;
  quantidade: number;
};

export default function CardDashboard({
  titulo,
  quantidade,
}: CardDashboardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-500">
        {titulo}
      </h3>

      <p className="text-3xl font-bold">
        {quantidade}
      </p>
    </div>
  );
}