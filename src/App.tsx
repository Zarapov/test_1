import { Routes, Route, Outlet, NavLink } from "react-router";
import "./styles.css";
import { PostsList } from "./components/PostsList";
import { FormattedList } from "./components/FormattedList";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/postlist">Задача 1</NavLink>
        <NavLink to="/format">Задача 2</NavLink>
      </nav>
      <Routes>
        <Route path="postlist" element={<PostsList url={postsUrl} />} />
        <Route path="format" element={<FormattedList />} />
      </Routes>
    </div>
  );
}
