import React from "react";

export default function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
          error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
        }`}
        placeholder={`Masukkan ${label.toLowerCase()}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
