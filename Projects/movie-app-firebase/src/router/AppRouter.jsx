import React, { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
