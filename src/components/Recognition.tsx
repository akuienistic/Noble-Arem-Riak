import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Quote, Newspaper, Users } from "lucide-react";
import nobleRecognition from "@/assets/noble-recognition.jpg";

const Recognition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="recognition" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            Awards & Recognition
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Honored for{" "}
            <span className="text-primary">Excellence</span>
          </h2>
        </motion.div>

        {/* Featured Recognition */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-3xl blur-xl" />
          <div className="relative p-8 md:p-12 rounded-2xl gradient-hero border border-gold/30 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl gradient-gold">
                    <Award className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <span className="font-body text-sm font-medium text-gold">
                    2025 Recognition
                  </span>
                </div>
                
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ranked #12 on "25 in 25"
                </h3>
                
                <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                  Featured on <span className="font-semibold">Briefly, South Sudan</span> magazine's 
                  prestigious list of the Top South Sudanese Personalities, highlighting his 
                  influence in the country's education sector.
                </p>
                
                <div className="flex items-center gap-4">
                  <Newspaper className="w-5 h-5 text-gold" />
                  <span className="font-body text-sm text-primary-foreground/70">
                    Most Impactful South Sudanese Personalities
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <motion.div
                    className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <img 
                      src={nobleRecognition} 
                      alt="Noble Arem Riak - Briefly South Sudan 25 in 25" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -top-4 -right-4 p-3 rounded-full bg-primary shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Recognition */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 rounded-2xl bg-card shadow-xl border border-border card-hover"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Users className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
              NGO Recognition
            </h4>
            <p className="font-body text-muted-foreground mb-4">
              Acknowledged by educational NGOs and associations for contributions 
              to schooling, including appreciation from Teachers Without Borders 
              and local school communities.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-card shadow-xl border border-border card-hover"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Quote className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
              Community Testimonials
            </h4>
            <p className="font-body text-muted-foreground mb-4">
              Positive testimonials from parents, students, and alumni praising 
              his leadership and the quality of education provided at his institutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
