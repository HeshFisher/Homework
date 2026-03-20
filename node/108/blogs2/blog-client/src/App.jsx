import "./App.css";
import { Outlet } from "react-router";
import Header from "./Header";
import Authentication from "./Authentication";

function App() {
  return (
    <>
      <Header />
      <Authentication />
      <Outlet />
    </>
  );
}

export default App;
