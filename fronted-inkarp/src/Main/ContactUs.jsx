import { Linkedin, Mail, Youtube, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/pages/Contact/ContactForm";
import LocationCards from "../components/pages/Contact/LocationCards";
import Contact from "../components/pages/Contact/Contact";

function ContactUs() {
  return (
    <>
      <Contact />
      <ContactForm />
      <LocationCards />
    </>
  )
}

export default ContactUs;
