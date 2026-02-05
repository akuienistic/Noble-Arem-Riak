import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, TrendingUp, Users, Star, GraduationCap, Shield } from "lucide-react";

const stats = [
  { value: "98%", label: "University Acceptance Rate", icon: GraduationCap },
  { value: "5+", label: "School Campuses", icon: Shield },
  { value: "#1", label: "Girls School in Juba", icon: Star },
  { value: "#10", label: "National Ranking", icon: TrendingUp },
];

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary mb-4">
            Impact & Community
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Making a{" "}
            <span className="text-primary">Difference</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 rounded-2xl bg-card shadow-lg border border-border text-center card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl gradient-hero">
              <Heart className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Addressing Gender Gaps in Education
              </h3>
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                In South Sudan, fewer than 10% of girls reach secondary school. Noble's 
                Amonto Girls Academy is described as "transforming lives and breaking 
                barriers" in a country where fewer than 500 girls completed high school 
                just ten years ago.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                <Users className="w-8 h-8 text-gold" />
                <div>
                  <p className="font-heading text-lg font-semibold text-primary-foreground">
                    36 Girls
                  </p>
                  <p className="font-body text-sm text-primary-foreground/60">
                    First cohort in 2024
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              {
                title: "Scholarships & Financial Aid",
                description:
                  "Amonto offers scholarships and financial aid to outstanding students, ensuring talented but disadvantaged learners have access to quality education.",
              },
              {
                title: "Community Engagement",
                description:
                  "Noble frequently speaks at school events and participates in educational forums, advocating the importance of patriotism and home-grown quality education.",
              },
              {
                title: "Recognition from NGOs",
                description:
                  "The Teachers Without Borders Association (South Sudan) has acknowledged his 'massive investment in education.'",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-card shadow-lg border border-border card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
