import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import AppRoutes from "./navigation/AppRoutes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
