import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../../_api";

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await API.get("/author");
        setAuthors(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthors();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus author ini?")) return;
    try {
      await API.delete(`/author/${id}`);
      alert("Author berhasil dihapus!");
      setAuthors((prev) => prev.filter((a) => a.id !== id));
    } catch {
      alert("Gagal menghapus author!");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Author ✍️</h1>
        <Link
          to="/admin/author/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Author
        </Link>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Nama Penulis</th>
            <th className="p-3 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={author.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b">{author.name}</td>
              <td className="p-3 border-b space-x-2">
                <Link
                  to={`/admin/author/edit/${author.id}`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(author.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
