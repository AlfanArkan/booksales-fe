import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../_api";

export default function AuthorCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/author", { name });
      navigate("/admin/author");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tambah Penulis Baru</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Nama Penulis</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Masukkan nama penulis"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
