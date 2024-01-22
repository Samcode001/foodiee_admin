import Navbar from "./components/Navbar";
import ProfileMenu from "./components/ProfileMenu";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/orders" element={<Home />} />
            <Route path="/menu" element={<ProfileMenu />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
