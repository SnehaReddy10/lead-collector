import { FaStar } from 'react-icons/fa';

function PrimaryInput({
  type,
  name,
  label,
  value,
  placeholder,
  onChange,
  required = false,
  error,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: any;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="m-1">
      <label
        htmlFor="email"
        className="flex gap-1 items-center text-gray-900 font-semibold mb-1"
      >
        {label}
        {required && <FaStar size={6} color="red" />}
      </label>
      <input
        style={{ border: required && error ? '1px solid red' : '' }}
        type={type}
        id="email"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-400 px-2 py-1 rounded-sm focus:outline-none focus:border-black"
        required={required}
      />
      {required && error && (
        <p className="text-red-500 text-[0.35rem] font-semibold">
          {label} is required
        </p>
      )}
    </div>
  );
}

export default PrimaryInput;
