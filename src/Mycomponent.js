import React from "react";
import { motion } from "framer-motion";

export const Mycomponent = () => {
  return (
    <div className="example-container">
      <motion.div
        animate={{ rotate: [0, 200, 200, 0], x: [0, -200, -200, 0] }}
        transition={{ repeat: Infinity, duration: 100 }}
      ></motion.div>
    </div>
  );
};
