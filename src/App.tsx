import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <main className="main-content">
            {/* <MainLayout /> */}
          </main>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
