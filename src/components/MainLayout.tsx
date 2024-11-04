import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import "./MainLayout.css";


const MainLayout = () => {
  return (
    <div className="main-layout">
      <nav className="navigation">
        <div className="logo">
          <img
            className="logo-img"
            alt="Logo"
            src="https://c.animaapp.com/G5NsOHgE/img/img-20241030-172945-778-1@2x.png"
          />
        </div>
        
        <div className="menu-items">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `menu-item ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `menu-item ${isActive ? "active" : ""}`
            }
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `menu-item ${isActive ? "active" : ""}`
            }
          >
            Our Services
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `menu-item ${isActive ? "active" : ""}`
            }
          >
            Projects
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `menu-item ${isActive ? "active" : ""}`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainLayout;
