// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Verticals from "./components/pages/Verticals";
import ContactUs from "./components/pages/ContactUs";
import OurStory from "./components/pages/OurStory";
import NotFound from "./components/pages/NotFound";
// import Insights from "./components/pages/Insights";
import Careers from "./components/pages/Careers";
import HeroSection from "./components/HeroSection";
import MainLayout from "./components/MainLayout";
import Principles from "./components/pages/UI/Principles";
import Blogs from "./components/pages/insights/Blogs";

function App() {
  return (
    <Router>
      <></>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/insights&updates/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
