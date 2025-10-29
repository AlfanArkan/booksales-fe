import React, { useState } from "react";
import InputField from "../../components/inputfield";

export default function Register() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let temp = {};
    if (!formData.nama) temp.nama = "Nama lengkap wajib diisi";
    if (!formData.email) temp.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Format email tidak valid";
    if (!formData.username) temp.username = "Username wajib diisi";
    if (!formData.password) temp.password = "Password wajib diisi";
    else if (formData.password.length < 6) temp.password = "Minimal 6 karakter";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Data dikirim:", formData);
      setSuccess(true);
      setFormData({ nama: "", email: "", username: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Form Registrasi</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nama Lengkap"
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            error={errors.nama}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Daftar Sekarang
          </button>
        </form>

        {success && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            Registrasi berhasil!
          </div>
        )}
      </div>
    </div>
  );
}
