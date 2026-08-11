import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mic } from 'lucide-react';
import EventsAndActivities from './EventsAndActivities';

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 48 : direction === 'down' ? -48 : 0,
      x: direction === 'left' ? 48 : direction === 'right' ? -48 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const BentoGrid = () => {
  const wings = [
    { label: 'Projects & R&D', desc: 'Project-based learning, research studies, literature reviews, and prototype development.' },
    { label: 'Industrial Connect', desc: 'Collaborations with industries for technical learning and building lasting professional relationships.' },
    { label: 'Activities & Events', desc: 'Workshops, expert talks, mini-courses, and interactive technical sessions.' },
    { label: 'Women Empowerment', desc: 'Promoting self-worth, educating rights, and creating pathways for women in technology.' },
    { label: 'Social Media Wing', desc: 'Disseminating information, designing artwork, and building our online community.' },
  ];

  return (
    <div className="bg-white relative z-20">

      {/* ════════════════════════════════════
          IDENTITY — One unified premium card
      ════════════════════════════════════ */}
      <section id="vision" className="w-full bg-slate-100 py-24 px-6 md:px-12 xl:px-20">

        {/* Section heading — no eyebrow label */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-sparkBlue leading-none">Our Identity</h2>
          </div>
        </Reveal>

        {/* The big unified card */}
        <div className="max-w-screen-xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-12px_rgba(11,36,71,0.25)] border border-slate-200/60">

          {/* ── Row 1: Vision (image left, text right) ── */}
          <Reveal direction="left">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] bg-white">
              {/* Image placeholder */}
              <div className="relative bg-gradient-to-br from-sparkBlue to-sparkLightBlue flex items-center justify-center min-h-[260px] md:min-h-full overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #19A7CE 0%, transparent 60%), radial-gradient(circle at 70% 50%, #85C227 0%, transparent 60%)' }}
                />
                {/* Empty image boundary */}
                <div className="relative z-10 w-40 h-32 rounded-2xl border-2 border-dashed border-white/25" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center px-10 py-14 md:px-14 xl:px-16 bg-white">
                <h3 className="text-4xl md:text-5xl font-black text-sparkBlue mb-6 leading-tight">
                  Vision
                </h3>
                <p className="text-slate-500 leading-relaxed text-base md:text-lg">
                  We believe in studying through projects and real-world activities that renew knowledge. Our aim is to permanently bridge the gap between the classroom and the engineering ecosystem.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Divider ── */}
          <div className="h-px w-full bg-slate-100" />

          {/* ── Row 2: Mission (text left, image right) ── */}
          <Reveal direction="right" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] bg-slate-50">
              {/* Text */}
              <div className="flex flex-col justify-center px-10 py-14 md:px-14 xl:px-16 order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-black text-sparkBlue mb-6 leading-tight">
                  Mission
                </h3>
                <p className="text-slate-500 leading-relaxed text-base md:text-lg">
                  We enrich and enhance our community through technical and cultural diversity, curiosity, and the overall development of engineering students — fostering out-of-the-box thinking and ethical values.
                </p>
              </div>
              {/* Image placeholder */}
              <div className="relative bg-gradient-to-bl from-sparkGreen/80 to-sparkAccent/80 flex items-center justify-center min-h-[260px] md:min-h-full overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #0B2447 0%, transparent 70%)' }}
                />
                <div className="relative z-10 w-40 h-32 rounded-2xl border-2 border-dashed border-white/30" />
                <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border border-white/10" />
              </div>
            </div>
          </Reveal>

          {/* ── Divider ── */}
          <div className="h-px w-full bg-slate-200" />

          {/* ── Row 3: About Chapter ── */}
          <Reveal direction="up" delay={0.15}>
            <div className="bg-sparkBlue px-10 py-16 md:px-14 xl:px-16 relative overflow-hidden">
              <div className="absolute top-0 left-1/4 w-80 h-80 bg-sparkAccent/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sparkGreen/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Logo */}
                <div className="relative shrink-0 w-44 h-44">
                  <div className="absolute inset-0 bg-sparkGreen/25 rounded-full blur-2xl animate-pulse" />
                  <img
                    src="/logo.jpg"
                    alt="SPARK Logo"
                    className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/15 shadow-[0_0_50px_rgba(25,167,206,0.35)]"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    About the Chapter
                  </h3>
                  <p className="text-white/55 leading-relaxed text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                    RV College is dedicated to the holistic development of individuals. Our logo signifies human evolution — from small milestones in technology to the bionic arm, symbolising the full spectrum of engineering progress.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sparkAccent to-sparkGreen font-bold">Changing the world, little by little.</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════
          WINGS — Full-width
      ════════════════════════════════════ */}
      <section id="wings" className="w-full px-12 py-24 md:px-16 xl:px-24">
        <Reveal>
          <div className="mb-14">
            <h2 className="text-4xl md:text-6xl font-black text-sparkBlue leading-none mb-5">The 5 Wings</h2>
            <p className="text-lg text-slate-500 max-w-3xl">Five specialized wings working in unison to create a complete ecosystem for student growth.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {wings.map((w, i) => (
            <Reveal key={w.label} delay={i * 0.07}>
              <div className="group bg-white border border-slate-100 border-t-4 border-t-sparkBlue rounded-3xl p-8 h-full flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 hover:border-x-sparkAccent/20 hover:border-b-sparkAccent/20 transition-all duration-300 cursor-default">
                {/* Empty image boundary */}
                <div className="w-full h-36 rounded-2xl border-2 border-dashed border-slate-200 group-hover:border-sparkAccent/40 transition-colors duration-300 mb-7 flex items-center justify-center bg-slate-50 group-hover:bg-sparkAccent/5">
                  <span className="text-xs text-slate-300 font-medium tracking-widest uppercase">Image</span>
                </div>
                <h4 className="text-base font-bold text-sparkBlue mb-3">{w.label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{w.desc}</p>
                <button className="mt-6 px-5 py-2 rounded-lg border border-sparkAccent/40 text-sparkAccent text-xs font-bold tracking-wider uppercase hover:bg-sparkAccent hover:text-white transition-all duration-200 hover:shadow-md">
                  Know More
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Podcasts card */}
        <Reveal delay={0.3} className="mt-8">
          <div
            id="podcasts"
            className="group relative w-full rounded-3xl overflow-hidden bg-sparkBlue p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 cursor-pointer hover:shadow-[0_20px_60px_rgba(11,36,71,0.35)] transition-shadow duration-500"
          >
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-sparkAccent/15 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sparkGreen/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mic size={36} className="text-sparkAccent" />
              </div>
              <div>
                {/* "Featured" label removed */}
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">SPARK Podcasts</h3>
                <p className="text-white/60 text-base max-w-lg">Exclusive conversations on technology, SDGs, engineering careers, and life at RVCE — straight from the people who live it.</p>
              </div>
            </div>

            <button className="relative z-10 shrink-0 flex items-center gap-3 bg-white text-sparkBlue font-bold py-4 px-8 rounded-2xl hover:bg-sparkAccent hover:text-white transition-all duration-300 text-base tracking-widest uppercase group-hover:-translate-y-1 group-hover:shadow-xl">
              Discover <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          EVENTS & ACTIVITIES TIMELINE SECTION
      ════════════════════════════════════ */}
      <EventsAndActivities />

      {/* ════════════════════════════════════
          FOOTER
      ════════════════════════════════════ */}
      <footer className="w-full bg-sparkBlue text-white/60 py-20 px-12 md:px-16 xl:px-24 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-xl border border-white/15" />
              <span className="text-2xl font-black text-white">SPARK RVCE</span>
            </div>
            <p className="max-w-sm leading-relaxed">IUCEE Student Chapter at RV College of Engineering. Enhancing educational experience beyond classroom walls.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#wings" className="hover:text-white transition-colors">Wings</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#podcasts" className="hover:text-white transition-colors">Podcasts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-6">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>RV College of Engineering</li>
              <li>Bengaluru, Karnataka</li>
              <li className="hover:text-white transition-colors cursor-pointer">spark@rvce.edu.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-sm text-center text-white/30">
          © 2024 SPARK IUCEE RVCE. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BentoGrid;
