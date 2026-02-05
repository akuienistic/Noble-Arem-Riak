import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Target, Lightbulb } from "lucide-react";
import nobleProfile from "@/assets/noble-profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A Journey of{" "}
            <span className="text-primary">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-gold/20 rounded-3xl blur-xl" />
              <div className="relative bg-card p-8 rounded-2xl shadow-xl border border-border">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40 rounded-full gradient-gold p-1">
                    <img 
                      src={nobleProfile} 
                      alt="Noble Arem Riak" 
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">
                    South Sudan
                  </span>
                </div>
                
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  <span className="font-heading text-2xl font-semibold text-foreground">
                    Noble Arem Riak
                  </span>{" "}
                  is a South Sudanese educator and social entrepreneur—an "edupreneur"—known 
                  for founding leading private schools in Juba. With a passion for transforming 
                  lives through education, he has dedicated his career to improving educational 
                  access in South Sudan.
                </p>

                <p className="font-body text-foreground/70 leading-relaxed">
                  Beginning his career in banking and finance, Noble leveraged his background 
                  to establish his first school, then expanded into multiple campuses. Today, 
                  he leads two major educational institutions that are shaping the future of 
                  education in the nation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Key Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                description:
                  "Committed to academic excellence, discipline, and innovation. Creating environments where students are inspired to lead and succeed.",
              },
              {
                icon: Lightbulb,
                title: "Visionary Leadership",
                description:
                  "Nurturing future leaders through strong moral values and problem-solving skills to become responsible global citizens.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl bg-card hover:bg-primary/5 transition-colors border border-border card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.blockquote
              className="relative p-6 rounded-2xl gradient-hero"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="absolute top-4 left-4 text-4xl text-primary/30 font-heading">
                "
              </div>
              <p className="font-heading text-xl text-primary-foreground italic pl-8">
                Transforming lives through education
              </p>
              <p className="font-body text-sm text-primary-foreground/60 mt-2 pl-8">
                — Noble Arem Riak
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
