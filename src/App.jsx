import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/shared/Layout";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import NotFound from "./components/pages/NotFound";
import LetsTalk from "./components/pages/LetsTalk";
import "../src/globals.css";
import Loader from "./components/shared/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={`app-container ${loading ? "loading" : "loaded"}`}>
        {!loading && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="letsTalk" element={<LetsTalk />} />
              {/* <Route path="resume" element={} /> */}

              {/* Page not found */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        )}
      </div>
    </>
  );
}
