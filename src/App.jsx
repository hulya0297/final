import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
