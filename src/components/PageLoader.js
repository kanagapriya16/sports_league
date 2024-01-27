import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {/* Your loader content goes here */}
 
  </motion.div>
);

export default PageLoader;
