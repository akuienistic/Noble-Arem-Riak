import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Target, Lightbulb, Award, Star } from "lucide-react";
import nobleProfile from "@/assets/noble-profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            <Star className="w-4 h-4" />
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A Journey of <span className="text-primary">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Redesigned Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Main Image Container */}
              <motion.div className="relative" variants={floatingVariants} animate="animate">
                {/* Outer decorative frame */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #00FFFF 0%, #008B8B 100%)",
                  }}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />

                {/* Inner image frame with border */}
                <motion.div
                  className="relative mx-4 my-4 rounded-2xl overflow-hidden"
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  style={{ margin: "24px" }}
                >
                  {/* Profile Image with overlay gradient */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={nobleProfile} alt="Noble Arem Riak" className="w-full h-full object-cover object-top" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                    {/* Floating badge */}
                    <motion.div
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="flex items-center gap-2 text-primary-foreground">
                        <Award className="w-4 h-4 text-gold" />
                        <span className="text-sm font-body font-medium">Edupreneur</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating stats/achievement badges */}
                <motion.div
                  className="absolute -right-4 top-1/4 bg-card p-3 rounded-xl shadow-lg border border-border"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">2 Schools</p>
                      <p className="font-body text-xs text-muted-foreground">Founded</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-4 bottom-1/4 bg-card p-3 rounded-xl shadow-lg border border-border"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gold/20">
                      <Lightbulb className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">10+ Years</p>
                      <p className="font-body text-xs text-muted-foreground">Experience</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Location indicator */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body text-sm font-medium text-foreground">South Sudan</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Key Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Noble Arem Riak</h3>
              <p className="font-body text-foreground/70 leading-relaxed mb-4">
                A South Sudanese educator and social entrepreneur—an "edupreneur"—known for founding leading private
                schools in Juba. With a passion for transforming lives through education, he has dedicated his career to
                improving educational access in South Sudan.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed">
                Beginning his career in banking and finance, Noble leveraged his background to establish his first
                school, then expanded into multiple campuses. Today, he leads two major educational institutions that
                are shaping the future of education in the nation.
              </p>
            </div>

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
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.blockquote
              className="relative p-6 rounded-2xl gradient-hero"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute top-4 left-4 text-4xl text-primary/30 font-heading">"</div>
              <p className="font-heading text-xl text-primary-foreground italic pl-8">
                Transforming lives through education
              </p>
              <p className="font-body text-sm text-primary-foreground/60 mt-2 pl-8">— Noble Arem Riak</p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
