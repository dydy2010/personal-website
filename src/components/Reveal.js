"use client";

import { motion } from "framer-motion";

// Tiny reusable wrapper that fades + slides content in when it scrolls into view.
// Usage: <Reveal><h2>Title</h2></Reveal>
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
