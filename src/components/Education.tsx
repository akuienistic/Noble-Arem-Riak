import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award, School, Star } from "lucide-react";

const educationData = [
  {
    degree: "Ph.D. (Candidate)",
    field: "Education Leadership",
    institution: "Field unspecified",
    year: "In Progress",
    icon: Award,
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    current: true,
    description: "Pursuing advanced research in educational policy and leadership.",
  },
  {
    degree: "M.A.",
    field: "International Relations",
    institution: "University of Juba",
    year: "2018",
    icon: GraduationCap,
    color: "from-cyan-500 to-cyan-700",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-500",
    description: "Specialized in global education policies and cross-cultural diplomacy.",
  },
  {
    degree: "MBA",
    field: "Banking & Finance",
    institution: "Kampala University, Uganda",
    year: "2015",
    icon: BookOpen,
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    description: "Advanced business management with focus on financial institutions.",
  },
  {
    degree: "B.A.",
    field: "Community Psychology",
    institution: "Makerere University, Kampala",
    year: "2012",
    icon: School,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    description: "Foundation in understanding community dynamics and human behavior.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="w-4 h-4" />
            Education
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Academic{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            A strong academic foundation spanning psychology, finance, and international 
            relations, shaping a unique approach to educational leadership.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.institution}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-5 transition-opacity group-hover:opacity-10`} />
                
                {/* Top icon section */}
                <div className="relative mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${edu.bgColor}`}>
                      <edu.icon className={`w-6 h-6 ${edu.textColor}`} />
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 rounded-full text-xs font-body font-medium bg-gold/20 text-gold">
                        Current
                      </span>
                    )}
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-body font-bold bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                      {edu.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className={`font-body text-sm ${edu.textColor} font-medium mb-2`}>
                    {edu.field}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {edu.institution}
                  </p>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Hover decoration */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                
                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${edu.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full`} />
              </div>

              {/* Connecting line for desktop */}
              {index < educationData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: GraduationCap, label: "Degrees", value: "4" },
            { icon: BookOpen, label: "Years Study", value: "10+" },
            { icon: Award, label: "Certifications", value: "12" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-4 rounded-xl bg-secondary/80 backdrop-blur-sm border border-primary/10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              <stat.icon className="w-5 h-5 text-background mx-auto mb-2" />
              <p className="font-heading text-2xl font-bold text-background">{stat.value}</p>
              <p className="font-body text-xs text-background">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
