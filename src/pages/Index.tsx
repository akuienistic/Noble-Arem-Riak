import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Initiatives from "@/components/Initiatives";
import Impact from "@/components/Impact";
import Recognition from "@/components/Recognition";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Initiatives />
            <Impact />
            <Recognition />
            <Vision />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
