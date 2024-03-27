import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Store from "./pages/store/Store.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Blog from "./pages/blog/Blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="blog" element={<Blog />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
