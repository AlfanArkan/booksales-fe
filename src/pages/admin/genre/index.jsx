import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../../_api";

export default function GenreList() {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  // Ambil semua data genre
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await API.get("/genre");
        setGenres(data);
      } catch (error) {
        console.error("Gagal mengambil data genre:", error);
      }
    };
    fetchGenres();
  }, []);

  // Fungsi hapus data genre
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus genre ini?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/genre/${id}`);
      alert("Genre berhasil dihapus!");
      // Refresh data
      setGenres((prev) => prev.filter((g) => g.id !== id));
    } catch  {
      alert("Gagal menghapus genre!");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Genre 📚</h1>
        <Link
          to="/admin/genre/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Genre
        </Link>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border-b w-12">#</th>
            <th className="p-3 border-b">Nama Genre</th>
            <th className="p-3 border-b text-center w-40">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {genres.length > 0 ? (
            genres.map((genre, index) => (
              <tr key={genre.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{index + 1}</td>
                <td className="p-3 border-b">{genre.name}</td>
                <td className="p-3 border-b text-center space-x-2">
                  <button
                    onClick={() => navigate(`/admin/genre/edit/${genre.id}`)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(genre.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                Tidak ada data genre.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
