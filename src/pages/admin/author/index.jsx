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

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Penulis ✍️</h1>
        <Link
          to="/admin/author/create"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Penulis
        </Link>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Nama Penulis</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={author.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b">{author.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
