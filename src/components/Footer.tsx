import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Heart,
  ExternalLink,
  Home,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Eye,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Initiatives", href: "#initiatives", icon: Briefcase },
  { label: "Recognition", href: "#recognition", icon: Award },
  { label: "Vision", href: "#vision", icon: Eye },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-hero pt-16 pb-8" ref={ref}>
      <div className="container-custom px-4">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Noble Arem<span className="text-primary">.</span>
            </h3>
            <p className="font-body text-primary-foreground/70 mb-6 max-w-md">
              A visionary edupreneur dedicated to transforming South Sudan 
              through quality education and empowering young people to reach 
              their full potential.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Juba, South Sudan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-primary/20 mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Noble Arem Riak. All rights reserved.
          </p>
          
          <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-1">
            Built and designed by{" "}
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gold transition-colors inline-flex items-center gap-1 font-medium"
            >
              Simon Akuien Atem
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
