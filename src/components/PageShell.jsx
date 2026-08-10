import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const PageShell = ({ title, subtitle, children }) => {
  return (
    <>
      {/* Hero banner — same style as Office Bearers */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #051525 0%, #0B2447 35%, #0d2f5c 60%, #19376D 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-sparkAccent/10 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sparkAccent/8 blur-[100px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-4">{title}</h1>
          {subtitle && <p className="text-white/50 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      </section>

      {/* Content */}
      {children ? (
        children
      ) : (
        <div className="bg-white min-h-[50vh] flex items-center justify-center px-6 py-24">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-sparkBlue/5 flex items-center justify-center">
              <span className="text-4xl">🚧</span>
            </div>
            <h2 className="text-3xl font-black text-sparkBlue mb-4">Coming Soon</h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">This page is under development. Content will be added by the team shortly.</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PageShell;
