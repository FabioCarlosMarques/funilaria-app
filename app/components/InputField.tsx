type InputFieldProps = {
  label: string;
  type?: string;
};

export default function InputField({
  label,
  type = "text",
}: InputFieldProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        className="w-full border rounded-md p-2"
      />
    </div>
  );
}