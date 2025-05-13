// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Verticals from "./components/pages/Verticals";
import ContactUs from "./components/pages/ContactUs";
import OurStory from "./components/pages/OurStory";
import NotFound from "./components/pages/NotFound";
// import Insights from "./components/pages/Insights";
import Careers from "./components/pages/Careers";
import MainLayout from "./components/MainLayout";
import NewCareers from "./components/pages/Careers/NewCareers";
import HeroSection from "./components/pages/Home/HeroSection";
import ScrollToTop from "./ScrollToTop";
import Catalyst from "./components/pages/Catalyst";
// import Blogs from "./components/pages/insights/Blogs";

function App() {
  return (
    <Router>
      <></>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/verticals" element={<Verticals />} />
          {/* <Route path="/insights&updates/blogs" element={<Blogs />} /> */}
          <Route path="/careers" element={<NewCareers />} />
          <Route path="/careers/positions" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/catalyst-cue" element={<Catalyst />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
