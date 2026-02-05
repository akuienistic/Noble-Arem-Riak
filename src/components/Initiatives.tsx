import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { School, Users, Trophy, MapPin, Calendar, Target } from "lucide-react";

const initiatives = [
  {
    name: "Darling Wisdom Academy",
    location: "Juba, South Sudan",
    established: "2018",
    description:
      "A private school group serving nursery through secondary students. Started as a single campus, now grown into five specialized campuses (kindergarten, primary and secondary) in Juba.",
    highlights: [
      "5 specialized campuses",
      "Nursery to Secondary",
      "Academic excellence focus",
      "Leadership training",
    ],
    color: "primary",
    icon: School,
  },
  {
    name: "Amonto Girls Academy",
    location: "Jebel Amianin, Juba",
    established: "2024",
    description:
      "An all-girls boarding secondary school on a 15-acre campus. Established to empower young women through education, the school welcomed its first cohort of 36 girls in 2024.",
    highlights: [
      "#1 Girls Secondary in Juba",
      "98% University acceptance rate",
      "Ranked 10th nationally",
      "Scholarships available",
    ],
    color: "gold",
    icon: Users,
  },
];

const Initiatives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="initiatives" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            Entrepreneurial Initiatives
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Building{" "}
            <span className="text-primary">Institutions</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Leading educational ventures that are transforming access to quality education 
            in South Sudan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.name}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-8 rounded-2xl bg-card shadow-xl border border-border overflow-hidden card-hover">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl ${initiative.color === "gold" ? "gradient-gold" : "bg-primary"} shadow-lg`}>
                      <initiative.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {initiative.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1 font-body text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {initiative.location}
                        </span>
                        <span className="flex items-center gap-1 font-body text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          Est. {initiative.established}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-foreground/70 leading-relaxed mb-6">
                  {initiative.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {initiative.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted/50"
                    >
                      <Trophy className={`w-4 h-4 ${initiative.color === "gold" ? "text-gold" : "text-primary"}`} />
                      <span className="font-body text-sm text-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Role badge */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Founder & Director
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
