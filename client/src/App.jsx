import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import CourseCreation from "./pages/CourseCreation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";
  const isDashboard = location.pathname === "/dashboard";
  return (
    <AuthProvider>
      {!isLoginPage && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teach" element={<CourseCreation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
      {!isLoginPage && !isDashboard && <Footer />}
    </AuthProvider>
  );
}

export default App;

// Check Navbar login, JWT
