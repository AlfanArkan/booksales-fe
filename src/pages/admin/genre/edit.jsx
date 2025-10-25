import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../../_api";

export default function GenreEdit() {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getGenre = async () => {
      try {
        const { data } = await API.get(`/genre/${id}`);
        setName(data.name);
      } catch (error) {
        console.error("Gagal mengambil data genre:", error);
      }
    };
    getGenre();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/genre/${id}`, { name });
      alert("Genre berhasil diperbarui!");
      navigate("/admin/genre");
    } catch  {
      alert("Gagal memperbarui genre!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Genre ✏️</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Nama Genre
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama genre"
          className="border rounded w-full p-2 mb-4"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
