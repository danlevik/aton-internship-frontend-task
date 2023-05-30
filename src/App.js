import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Auth } from "./pages/Auth/index";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
