import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./front/Header";
import Footer from "./front/Footer";
import Home from "./front/Home";
import Login from "./front/Login"; // Ensure the correct import for SignIn
import Register from "./front/Register"; // Import Register component

function App() {
  const location = useLocation();

  const hideHeader = [ "/login", "/register"].includes(location.pathname); // Added '/register' to hide header on that route

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Added route for Register */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
