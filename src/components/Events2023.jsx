import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Images
} from 'lucide-react';
import { eventsByYear } from '../data/eventsData';

const Events2023 = () => {
  const events = eventsByYear['2023']?.events || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  if (!events.length) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-500">No 2023 events available.</p>
      </div>
    );
  }

  const activeEvent = events[activeIndex];

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
    setShowDetails(false);
  };

  const previousEvent = () => {
    setActiveIndex(
      (prev) => (prev - 1 + events.length) % events.length
    );
    setShowDetails(false);
  };

  const selectEvent = (index) => {
    setActiveIndex(index);
    setShowDetails(false);
  };

  return (
    <section className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#071426] text-white">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-emerald-400/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="relative z-10">

        {/* ═══════════════════════════════════
            2023 INTRO
        ═══════════════════════════════════ */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.6fr] min-h-[480px]">

          {/* Left information */}
          <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-14">

            <p className="text-cyan-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              The SPARK Archive
            </p>

            <h3 className="text-7xl md:text-8xl xl:text-9xl font-black tracking-tight leading-none">
              2023
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 my-7 rounded-full" />

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-md">
              A year of new beginnings, meaningful connections and
              impactful experiences.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-2xl font-black text-cyan-400">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>

              <span className="text-white/30 text-xl">
                /
              </span>

              <span className="text-white/60 font-semibold">
                {String(events.length).padStart(2, '0')}
              </span>

              <span className="ml-2 text-xs uppercase tracking-widest text-white/40">
                Events
              </span>
            </div>
          </div>


          {/* ═══════════════════════════════════
              FEATURED EVENT IMAGE
          ═══════════════════════════════════ */}

          <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.img
                key={activeEvent.id}
                src={activeEvent.images?.[0] || '/hero.png'}
                alt={activeEvent.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/hero.png';
                }}
              />
            </AnimatePresence>

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-transparent to-transparent lg:from-[#071426]/70 lg:via-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />

            {/* Event label */}
            <div className="absolute bottom-8 left-8 right-8 md:left-10 md:right-10">

              <motion.div
                key={activeEvent.id + '-text'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >

                <span className="inline-block px-3 py-1 rounded-full bg-cyan-400 text-[#071426] text-[10px] font-black uppercase tracking-wider mb-3">
                  {activeEvent.tag}
                </span>

                <h4 className="text-3xl md:text-4xl xl:text-5xl font-black leading-tight max-w-3xl">
                  {activeEvent.title}
                </h4>

              </motion.div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={previousEvent}
              className="absolute left-5 top-1/2 -translate-y-1/2
                         w-11 h-11 rounded-full
                         border border-white/30 bg-black/30 backdrop-blur-md
                         flex items-center justify-center
                         hover:bg-cyan-400 hover:text-[#071426]
                         hover:border-cyan-400
                         transition-all"
              aria-label="Previous event"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextEvent}
              className="absolute right-5 top-1/2 -translate-y-1/2
                         w-11 h-11 rounded-full
                         border border-white/30 bg-black/30 backdrop-blur-md
                         flex items-center justify-center
                         hover:bg-cyan-400 hover:text-[#071426]
                         hover:border-cyan-400
                         transition-all"
              aria-label="Next event"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>


        {/* ═══════════════════════════════════
            FILM STRIP
        ═══════════════════════════════════ */}

        <div className="border-y border-white/10 bg-black/20 px-4 py-5 md:px-8">

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">

            {events.map((event, index) => {

              const isActive = index === activeIndex;

              return (
                <button
                  key={event.id}
                  onClick={() => selectEvent(index)}
                  className={`
                    group relative shrink-0
                    w-[150px] md:w-[180px]
                    rounded-xl overflow-hidden
                    border transition-all duration-300
                    ${isActive
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20 scale-[1.03]'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                    }
                  `}
                >

                  <div className="h-[95px] overflow-hidden">

                    <img
                      src={event.images?.[0] || '/hero.png'}
                      alt={event.title}
                      className="w-full h-full object-cover
                                 group-hover:scale-110
                                 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/hero.png';
                      }}
                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute top-2 left-2">
                    <span className="text-cyan-400 font-black text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[10px] md:text-[11px] font-bold text-white leading-tight line-clamp-2 text-left">
                      {event.title}
                    </p>
                  </div>

                </button>
              );
            })}

          </div>
        </div>


        {/* ═══════════════════════════════════
            EVENT INFORMATION
        ═══════════════════════════════════ */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 px-8 md:px-12 xl:px-16 py-12">

          {/* Main description */}

          <motion.div
            key={activeEvent.id + '-info'}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="px-3 py-1 rounded-lg bg-cyan-400/10 text-cyan-400 text-xs font-black">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(events.length).padStart(2, '0')}
              </span>

              <span className="h-px w-10 bg-white/20" />

              <span className="text-white/40 text-xs uppercase tracking-widest">
                Featured Archive
              </span>

            </div>

            <h4 className="text-3xl md:text-4xl font-black mb-5">
              {activeEvent.title}
            </h4>

            <div className="flex flex-wrap gap-5 mb-6 text-sm">

              {activeEvent.date && (
                <div className="flex items-center gap-2 text-cyan-400">
                  <Calendar size={16} />
                  <span>{activeEvent.date}</span>
                </div>
              )}

              {activeEvent.location && (
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin size={16} />
                  <span>{activeEvent.location}</span>
                </div>
              )}

            </div>

            <p className="text-white/65 leading-relaxed text-base md:text-lg max-w-2xl">
              {activeEvent.shortDesc}
            </p>

            <button
              onClick={() => setShowDetails(true)}
              className="mt-8 inline-flex items-center gap-3
                         px-6 py-3 rounded-xl
                         bg-white text-[#071426]
                         font-black text-sm
                         hover:bg-cyan-400
                         transition-all group"
            >
              Explore Event
              <ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

          </motion.div>


          {/* Right stats/highlights */}

          <motion.div
            key={activeEvent.id + '-side'}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >

            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-5">
              Highlights
            </p>

            <div className="space-y-4">

              {(activeEvent.highlights || []).slice(0, 4).map(
                (highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />

                    <p className="text-sm text-white/60 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                )
              )}

            </div>

            {activeEvent.images?.length > 1 && (
              <div className="mt-7 pt-5 border-t border-white/10 flex items-center gap-2 text-white/40 text-xs">
                <Images size={15} />
                {activeEvent.images.length} photographs
              </div>
            )}

          </motion.div>

        </div>


        {/* ═══════════════════════════════════
            NEXT EVENT
        ═══════════════════════════════════ */}

        <div className="flex justify-between items-center border-t border-white/10 px-8 md:px-12 xl:px-16 py-5">

          <button
            onClick={previousEvent}
            className="flex items-center gap-2 text-white/50 hover:text-cyan-400 transition-colors text-sm font-bold"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll through the archive
          </span>

          <button
            onClick={nextEvent}
            className="flex items-center gap-2 text-white/50 hover:text-cyan-400 transition-colors text-sm font-bold"
          >
            Next
            <ChevronRight size={18} />
          </button>

        </div>

      </div>


      {/* ═══════════════════════════════════
          FULL EVENT DETAILS
      ═══════════════════════════════════ */}

      <AnimatePresence>
        {showDetails && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md
                       flex items-center justify-center p-4 md:p-8"
            onClick={() => setShowDetails(false)}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh]
                         overflow-y-auto rounded-3xl
                         bg-[#071426] border border-white/10 shadow-2xl"
            >

              {/* Close */}

              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-5 right-5 z-20
                           w-10 h-10 rounded-full
                           bg-black/60 border border-white/20
                           flex items-center justify-center
                           hover:bg-cyan-400 hover:text-[#071426]
                           transition-all"
              >
                <X size={20} />
              </button>


              {/* Main image */}

              <div className="h-[280px] md:h-[400px] overflow-hidden">

                <img
                  src={activeEvent.images?.[0] || '/hero.png'}
                  alt={activeEvent.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/hero.png';
                  }}
                />

              </div>


              {/* Details */}

              <div className="p-7 md:p-10">

                <span className="inline-block px-3 py-1 rounded-full
                                 bg-cyan-400 text-[#071426]
                                 text-[10px] font-black uppercase tracking-wider mb-4">
                  {activeEvent.tag}
                </span>

                <h3 className="text-3xl md:text-5xl font-black mb-5">
                  {activeEvent.title}
                </h3>

                <div className="flex flex-wrap gap-5 text-sm mb-8">

                  {activeEvent.date && (
                    <span className="flex items-center gap-2 text-cyan-400">
                      <Calendar size={16} />
                      {activeEvent.date}
                    </span>
                  )}

                  {activeEvent.location && (
                    <span className="flex items-center gap-2 text-white/60">
                      <MapPin size={16} />
                      {activeEvent.location}
                    </span>
                  )}

                </div>

                <p className="text-white/65 text-base md:text-lg leading-relaxed">
                  {activeEvent.fullDesc || activeEvent.shortDesc}
                </p>


                {activeEvent.speakers?.length > 0 && (
                  <div className="mt-8">

                    <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                      Speakers / Guests
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {activeEvent.speakers.map((speaker, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-xl
                                     bg-white/5 border border-white/10
                                     text-white/70 text-sm"
                        >
                          {speaker}
                        </span>
                      ))}

                    </div>

                  </div>
                )}


                {activeEvent.stats &&
                  Object.keys(activeEvent.stats).length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">

                      {Object.entries(activeEvent.stats).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="rounded-xl border border-white/10
                                       bg-white/[0.03] p-4"
                          >
                            <p className="text-[10px] uppercase tracking-widest text-white/35 mb-1">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </p>

                            <p className="font-black text-cyan-400">
                              {value}
                            </p>
                          </div>
                        )
                      )}

                    </div>
                  )}

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </section>
  );
};

export default Events2023;