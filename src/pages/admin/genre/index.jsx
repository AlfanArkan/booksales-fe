import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../../_api";

export default function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await API.get("/genre");
        setGenres(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);

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
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Nama Genre</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => (
            <tr key={genre.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b">{genre.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
