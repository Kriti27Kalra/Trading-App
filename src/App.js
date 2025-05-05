import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./front/Header";
import Footer from "./front/Footer";
import Home from "./front/Home";
import Login from "./front/Login";
import Register from "./front/Register";

function App() {
  const location = useLocation();

  // Paths where header/footer should be hidden
  const hideHeaderPaths = [];
  const hideFooterPaths = [];

  const shouldHideHeader = hideHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  const shouldHideFooter = hideFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div>
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
