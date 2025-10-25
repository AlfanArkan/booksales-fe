import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";
import GenreList from "./pages/admin/genre";
import GenreCreate from "./pages/admin/genre/create";
import GenreEdit from "./pages/admin/genre/edit";
import AuthorList from "./pages/admin/author";
import AuthorCreate from "./pages/admin/author/create";
import AuthorEdit from "./pages/admin/author/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
        </Route>

        {/* ================= AUTH ================= */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* ================= ADMIN ================= */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* Books */}
          <Route path="books">
            <Route index element={<AdminBooks />} />
            <Route path="create" element={<BookCreate />} />
          </Route>

          {/* Genre */}
          <Route path="genre" element={<GenreList />} />
          <Route path="genre/create" element={<GenreCreate />} />
          <Route path="genre/edit/:id" element={<GenreEdit />} />

          {/* Author */}
          <Route path="author" element={<AuthorList />} />
          <Route path="author/create" element={<AuthorCreate />} />
          <Route path="author/edit/:id" element={<AuthorEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
