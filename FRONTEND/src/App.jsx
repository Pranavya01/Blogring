import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";
import 'quill/dist/quill.snow.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Author from "./pages/Author";
import {Toaster} from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import Register from "./components/admin/Register";
import Feature from "./pages/feature";

const App = () => {

  const {token} = useAppContext()

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/author/:id" element={<Author/>}/>
        <Route path="/admin" element={token ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog/>}/>
          <Route path="comments" element={<Comments/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feature" element={<Feature/>}/>
      </Routes>
    </div>
  );
};

export default App;
