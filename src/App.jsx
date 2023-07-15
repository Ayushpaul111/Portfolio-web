import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/shared/Layout";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import NotFound from "./components/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        {/* <Route path="resume" element={} /> */}

        {/* Page not found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
