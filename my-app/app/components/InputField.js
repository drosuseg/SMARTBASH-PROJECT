export default function InputField({ 
  label, 
  type = "text", 
  placeholder, 
  required, 
  defaultValue, 
  onChange,
  ...props 
}) {
  return (
    <div>
      {label && (
        <label className="block mb-2 font-medium text-sm text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        {...props}
      />
    </div>
  );
}