// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainLayout from "./components/MainLayout";
// Pages
import Home from "./components/pages/Home";
import OurStory from "./components/pages/OurStory";
import Verticals from "./components/pages/Verticals";

import NewCareers from "./components/pages/Careers/NewCareers";
import Careers from "./components/pages/Careers";
import HeroSection from "./components/pages/Home/HeroSection";
import Catalyst from "./components/pages/Catalyst";
import BlogsPage from "./components/pages/NewsAndEvents/BlogsPage";
import EventsPage from "./components/pages/NewsAndEvents/EventsPage";
import ProductProfile from "./components/pages/ProductProfile";
import NotFound from "./components/pages/NotFound";
import EventsNew from "./components/pages/NewsAndEvents/EventsNew";
import TermsAndConditions from "./components/pages/Footer/TermsAndConditions";
import Contact from "./components/pages/Contact/Contact";
import Events from "./components/pages/NewsAndEvents/Events";
import WebinarsPage from "./components/pages/NewsAndEvents/WebinarsPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/careers" element={<NewCareers />} />
          <Route path="/careers/positions" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/catalyst-cue" element={<Catalyst />} />
          <Route path="/insights/blogs" element={<BlogsPage />} />
          <Route path="/insights/news&events" element={<EventsPage />} />
          {/* <Route path="/insights/news&events" element={<EventsNew />} /> */}
          {/* <Route path="/insights/news&events" element={<Events />} /> */}
          <Route path="/insights/news&events/webinars" element={<WebinarsPage />} />
          <Route path="/productProfile" element={<ProductProfile />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
