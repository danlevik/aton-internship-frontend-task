import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Auth } from "./pages/Auth/index";
import { MainPage } from "./pages/MainPage";
import ProtectedRoute from "./util/ProtectedRoute";
import { UserObjects } from "./pages/UserObjects";
import { Registration } from "./pages/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/signup" element={<Registration />}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/objects"
          element={
            <ProtectedRoute>
              <UserObjects />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
