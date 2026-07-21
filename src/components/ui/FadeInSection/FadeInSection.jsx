import { motion } from "framer-motion";

function FadeInSection({
  children,
  delay = 0,
  y = 40,
  duration = 0.6,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;