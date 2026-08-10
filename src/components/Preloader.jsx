import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100vh' }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-sparkBlue overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-32 h-32 mb-6"
        >
          {/* Pulsing rings */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-2 border-sparkAccent"
          />
          <motion.div 
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-2 border-sparkGreen"
          />
          {/* Logo Image */}
          <img src="/spark.png" alt="SPARK Logo" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(25,167,206,0.5)]" />
        </motion.div>

        {/* Text Reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-display font-black text-white tracking-widest text-center"
          >
            SPARK <span className="text-sparkGreen">RVCE</span>
          </motion.h1>
        </div>
        
        {/* Subtitle */}
        <div className="overflow-hidden mt-2">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sparkAccent tracking-widest text-sm font-medium uppercase"
          >
            Changing the world little by little
          </motion.p>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="h-1 bg-sparkGreen mt-8 rounded-full shadow-[0_0_10px_#85C227]"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
