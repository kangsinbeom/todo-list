import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
const Router = ()=> {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
  )
};

export default Router;

// Layout의 children으로 받아서 사용하는 것이 있던데 어떻게 하는지 
// 알아보고 나도 써보자!!