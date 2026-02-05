import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, GraduationCap, Briefcase, Heart, Award, Eye, Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Initiatives", href: "#initiatives", icon: Briefcase },
  { label: "Impact", href: "#impact", icon: Heart },
  { label: "Recognition", href: "#recognition", icon: Award },
  { label: "Vision", href: "#vision", icon: Eye },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If contact section doesn't exist, show alert or create one
      const contactSection = document.createElement("section");
      contactSection.id = "contact";
      document.body.appendChild(contactSection);
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 hidden lg:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="gradient-hero backdrop-blur-md border-b border-primary/20">
          <div className="container-custom">
            <div className="flex items-center justify-between h-20 px-4">
              {/* Logo */}
              <motion.a
                href="#home"
                className="font-heading text-2xl font-bold text-primary-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Noble<span className="text-primary">.</span>
              </motion.a>

              {/* Centered Nav Items */}
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors nav-link font-body text-sm font-medium"
                    whileHover={{ y: -2 }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Contact Button */}
              <motion.button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                Contact
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Logo */}
      <motion.a
        href="#home"
        className="fixed top-4 left-4 z-50 lg:hidden font-heading text-xl font-bold text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Noble<span className="text-primary">.</span>
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 lg:hidden p-3 rounded-full gradient-hero shadow-lg border border-primary/30"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-1/2 max-w-xs gradient-hero z-40 lg:hidden shadow-2xl border-l border-primary/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col pt-20 px-4">
                {/* Logo */}
                <motion.div
                  className="mb-8 pb-4 border-b border-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-heading text-xl font-bold text-primary-foreground">
                    Noble<span className="text-primary">.</span>
                  </span>
                </motion.div>

                {/* Nav Items */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-sidebar-accent transition-colors font-body text-sm font-medium text-left"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      {item.label}
                    </motion.button>
                  ))}

                  {/* Mobile Contact Button */}
                  <motion.button
                    onClick={scrollToContact}
                    className="flex items-center gap-3 px-4 py-3 mt-4 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + navItems.length * 0.05 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
