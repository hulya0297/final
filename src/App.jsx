import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <h1>Welcome to our website!</h1>
      <Outlet/>
    </>
  );
}

export default App;
