import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, User, MessageSquare, Building, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "Juba, South Sudan",
    subtext: "East Africa",
  },
  {
    icon: Mail,
    title: "Email",
    details: "noble@arem.com",
    subtext: "Send us an email",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+211 912 345 678",
    subtext: "Mon - Fri, 9am - 5pm",
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Within 24 hours",
    subtext: "We value your time",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "general",
      message: "",
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 gradient-hero relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get in Touch</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Let's Start a Conversation
          </h2>

          <p className="font-body text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Have a question, partnership opportunity, or want to collaborate? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">Contact Information</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-1">{item.title}</h4>
                      <p className="font-body text-primary-foreground font-medium">{item.details}</p>
                      <p className="font-body text-primary-foreground/50 text-sm">{item.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-primary/20">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">Send Us a Message</h3>

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-primary-foreground mb-2">Message Sent!</h4>
                  <p className="font-body text-primary-foreground/70">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="flex items-center gap-2 font-body text-sm font-medium text-primary-foreground/80"
                      >
                        <User className="w-4 h-4 text-primary" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors font-body"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 font-body text-sm font-medium text-primary-foreground/80"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors font-body"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="flex items-center gap-2 font-body text-sm font-medium text-primary-foreground/80"
                      >
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors font-body"
                      />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <label
                        htmlFor="category"
                        className="flex items-center gap-2 font-body text-sm font-medium text-primary-foreground/80"
                      >
                        <Building className="w-4 h-4 text-primary" />
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-primary/20 text-primary-foreground focus:outline-none focus:border-primary transition-colors font-body"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media & Press</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="donation">Donation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 font-body text-sm font-medium text-primary-foreground/80"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors font-body resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-body font-medium text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
