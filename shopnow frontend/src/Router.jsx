import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"

const Router = () => {

    return(
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
           </Routes>
        </BrowserRouter>
    );
}

export default Router;