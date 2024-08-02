
import "./App.css";
import AllRoutes from "../Components/AllRoutes";
import Navb from "../Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <Navb />
      {/* <AllRoutes/> */}
      <Routes>
           <Route path="/" element={<Home/> }/>
           <Route path="/product" element={<Product/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="*" element={<NotFound/>} />
        </Routes>

    </>
  );
}

export default App;
