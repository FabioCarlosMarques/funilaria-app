type CheckboxGroupProps = {
  titulo: string;
  itens: string[];
};

export default function CheckboxGroup({
  titulo,
  itens,
}: CheckboxGroupProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">

      <h2 className="text-xl font-bold mb-6">
        {titulo}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {itens.map((item) => (

          <label
            key={item}
            className="flex items-center gap-2"
          >

            <input type="checkbox" />

            {item}

          </label>

        ))}

      </div>

    </div>
  );
}