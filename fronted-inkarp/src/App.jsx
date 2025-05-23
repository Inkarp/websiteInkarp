// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainLayout from "./components/MainLayout";
import OurStory from "./Main/OurStory";
import Home from "./Main/Home";
import Verticals from "./Main/Verticals";
import Careers from "./Main/Careers";
import ContactUs from "./Main/ContactUs";
import Catalyst from "./Main/Catalyst";
import WebinarsPage from "./components/pages/NewsAndEvents/WebinarsPage";
import ProductProfile from "./Main/ProductProfile";
import NotFound from "./Main/NotFound";
import NewCareers from "./components/pages/Careers/NewCareers";
import BlogsPage from "./components/pages/NewsAndEvents/BlogsPage";
import EventsPage from "./components/pages/NewsAndEvents/EventsPage";
import TermsAndConditions from "./components/pages/Footer/TermsAndConditions";
// Pages


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
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/home" element={<HeroSection />} /> */}
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
