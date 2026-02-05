import { motion } from "framer-motion";
import { ChevronDown, Award, School, BookOpen, ArrowRight, User } from "lucide-react";
import nobleProfile from "@/assets/noble-profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Profile Image - Visible only on small screens */}
          <motion.div
            className="lg:hidden flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image */}
              <div className="relative w-48 h-48 rounded-full gradient-gold p-1">
                <img 
                  src={nobleProfile} 
                  alt="Noble Arem Riak" 
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 px-3 py-1 rounded-full gradient-hero shadow-lg border border-primary/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="font-body text-xs font-medium text-primary">
                  PhD Candidate
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 px-3 py-1 rounded-full bg-gold shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="font-body text-xs font-medium text-accent-foreground">
                  #12 in 25
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/20 text-primary my-4 lg:my-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              Edupreneur & Visionary Leader
            </motion.span>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Noble Arem{" "}
              <span className="gradient-text">Riak</span>
            </motion.h1>

            <motion.p
              className="font-body text-base md:text-lg text-primary-foreground/80 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Transforming South Sudan through quality education. Founder of leading 
              educational institutions, empowering the next generation of leaders.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { icon: School, label: "Schools", value: "2" },
                { icon: BookOpen, label: "Campuses", value: "5+" },
                { icon: Award, label: "Ranked #12", value: "2025" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/20"
                >
                  <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                  <div>
                    <p className="font-heading text-lg lg:text-xl font-bold text-primary-foreground">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-primary-foreground/60">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.a
                href="#initiatives"
                className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-body font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-body font-semibold text-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-4 h-4" />
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Desktop Image/Illustration */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-8 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-16 rounded-full border border-gold/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full gradient-gold p-1 animate-pulse-glow">
                <img 
                  src={nobleProfile} 
                  alt="Noble Arem Riak" 
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full gradient-hero shadow-xl border border-primary/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="font-body text-sm font-medium text-primary">
                  PhD Candidate
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-gold shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="font-body text-sm font-medium text-accent-foreground">
                  #12 in 25
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
