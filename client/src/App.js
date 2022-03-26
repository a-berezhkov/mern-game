import { Main } from "./pages/main/main";
import { Home } from "./pages/home/home";
import { Platform } from "./pages/platform/platform";
import { Board } from "./pages/board/board";
import { Costs } from "./pages/costs/costs";
import { Contacts } from "./pages/contacts/contacts";
import { Login } from "./pages/login/login";
import { Signin } from "./pages/signin/signin";
import { Monster } from "./ui/monster/monster";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/board" element={<Board />} />
        <Route path="/costs" element={<Costs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signin"
          element={<Signin caption="Зарегистрироваться" />}
        />
        <Route path="/monster" element={<Monster />} />
      </Routes>
    </>
  );
}

export default App;
