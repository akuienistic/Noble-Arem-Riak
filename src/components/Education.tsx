import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    degree: "Ph.D. (Candidate)",
    field: "In Progress",
    institution: "Field unspecified",
    icon: Award,
    color: "from-gold to-gold-light",
    current: true,
  },
  {
    degree: "M.A.",
    field: "International Relations",
    institution: "University of Juba",
    icon: GraduationCap,
    color: "from-primary to-cyan-dark",
  },
  {
    degree: "MBA",
    field: "Banking & Finance",
    institution: "Kampala University, Uganda",
    icon: BookOpen,
    color: "from-secondary to-navy-light",
  },
  {
    degree: "B.A.",
    field: "Community Psychology",
    institution: "Makerere University, Kampala",
    icon: GraduationCap,
    color: "from-primary to-secondary",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            Education
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Academic{" "}
            <span className="text-primary">Excellence</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            A strong academic foundation spanning psychology, finance, and international 
            relations, shaping a unique approach to educational leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.field}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden lg:block z-10" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                </div>

                {/* Card */}
                <div className={`${index % 2 === 0 ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                  <div className="group p-6 rounded-2xl bg-card shadow-lg border border-border card-hover relative overflow-hidden">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />
                    
                    {/* Current badge */}
                    {edu.current && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-medium bg-gold text-accent-foreground">
                        In Progress
                      </span>
                    )}

                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} shadow-lg`}>
                        <edu.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {edu.degree} {edu.field !== "In Progress" && "in"} {edu.field}
                        </h3>
                        <p className="font-body text-muted-foreground mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
