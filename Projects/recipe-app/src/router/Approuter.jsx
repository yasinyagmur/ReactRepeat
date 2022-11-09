import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail/Detail";
import { GlobalStyles } from "../components/GlobalStyles/Global.styles";
import Navbar from "../components/Nav/Navbar";
import { About } from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";

const Approuter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* user true ise about pages gidiş gerçekleşiyor yoksa private routerda belirtilen page e gidiyor */}
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        {/* user true ise detail components açılıyor yoksa private routerda belirtilen page e gidiyor */}
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
