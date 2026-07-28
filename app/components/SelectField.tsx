type SelectFieldProps = {
  label: string;
  options: string[];
};

export default function SelectField({
  label,
  options,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <select className="w-full border rounded-md p-2">
        <option value="">
          Selecione...
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}