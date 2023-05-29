import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Auth } from "./pages/auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Auth />}></Route>
      </Routes>
    </div>
  );
}

export default App;
