import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, Compass, Heart, Target, Sparkles } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Academic Excellence",
    description: "Commitment to the highest standards of education and learning outcomes.",
  },
  {
    icon: Shield,
    title: "Discipline",
    description: "Fostering self-discipline and responsibility in every student.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building character through honesty, ethics, and strong moral values.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging creative thinking and problem-solving abilities.",
  },
  {
    icon: Compass,
    title: "Leadership",
    description: "Preparing students to become responsible global citizens and leaders.",
  },
  {
    icon: Target,
    title: "Empowerment",
    description: "Creating opportunities for all, especially girls, to reach their potential.",
  },
];

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            Vision & Values
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Guiding{" "}
            <span className="text-primary">Principles</span>
          </h2>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mb-16 p-8 md:p-12 rounded-2xl gradient-hero text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Vision Statement
            </h3>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              To nurture future leaders through innovation, discipline, and strong moral 
              values—creating a safe, inclusive, and empowering environment where young 
              people are inspired to lead, innovate, and succeed.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/20 border border-primary/30">
              <Target className="w-5 h-5 text-gold" />
              <span className="font-body text-sm font-medium text-primary-foreground">
                Transforming lives through education
              </span>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="p-6 rounded-2xl bg-card shadow-lg border border-border card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="font-body text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-card shadow-xl border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Mission
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              To equip students with problem-solving skills and confidence, preparing 
              them to be responsible global citizens who contribute positively to 
              society and their nation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
