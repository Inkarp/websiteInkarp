import { Linkedin, Mail, Youtube, MessageCircle, Phone } from "lucide-react";
import Contact from "./Contact/Contact";
import ContactForm from "./Contact/ContactForm";
import LocationCards from "./Contact/LocationCards";

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
