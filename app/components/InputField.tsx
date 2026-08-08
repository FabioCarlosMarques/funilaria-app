type InputFieldProps = {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  label,
  type = "text",
  value = "",
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>

      <input
        type={type}
        {...(value !== undefined ? { value } : {})}
        {...(onChange ? { onChange } : {})}
        className="w-full border rounded-md p-2"
      />
    </div>
  );
}
