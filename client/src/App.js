import Home from "./pages/home/home";
import Signin from "./pages/SignIn/signin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/signin"
          element={<Signin caption="Зарегистрироваться" />}
        />
      </Routes>
    </>
  );
}

export default App;
