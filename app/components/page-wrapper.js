"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function PageWrapper({ children }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}



