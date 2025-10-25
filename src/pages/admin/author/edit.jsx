import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../../_api";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const { data } = await API.get(`/author/${id}`);
        setName(data.name);
      } catch (error) {
        console.error("Gagal memuat data author:", error);
      }
    };
    fetchAuthor();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/author/${id}`, { name });
      alert("Author berhasil diperbarui!");
      navigate("/admin/author");
    } catch {
      alert("Gagal memperbarui author!");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Author ✍️</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Nama Penulis</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg w-full px-3 py-2 mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
