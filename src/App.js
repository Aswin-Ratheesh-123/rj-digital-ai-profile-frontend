import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Websites from "./pages/Websites";
import AIVideos from "./pages/AIVideos";
import AllAIVideos from "./pages/AllAIVideos"; // NEW PAGE
import Posters from "./pages/Posters";
import Contact from "./pages/Contact";
import AllPosters from "./pages/AllPosters";

// import "./styles/Global.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <div className="main-content">
                <About />
                <Projects />
                <AIVideos />
                <Posters />
                <Contact />
                <Footer />
              </div>
            </>
          }
        />

        {/* All AI videos page */}
        <Route path="/ai-videos" element={<AllAIVideos />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/all-posters" element={<AllPosters />} />



      </Routes>
    </Router>
  );
}

export default App;
