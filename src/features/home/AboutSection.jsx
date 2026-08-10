import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';

/* ══════════════════════════════════════════════════════════
   ABOUT OUR LOGO
══════════════════════════════════════════════════════════ */
const AboutLogo = () => (
  <section className="w-full py-20 px-6 md:px-12 xl:px-24 bg-slate-50">
    <div className="max-w-screen-xl mx-auto">
      <Reveal>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 max-w-sm lg:max-w-none w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-8 flex items-center justify-center aspect-square">
              <img
                src="/images/logo.png"
                alt="SPARK Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-sparkBlue mb-6 leading-tight">
              About our Logo
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              The logo of the student chapter signifies how we as humans started off with small milestones in technology and to where we have come till now, the transformation of a hand holding a light bulb till using the available technology and tools (the human hand on the top and the bionic arm at the bottom) we like to move a step ahead making our planet a better place to live. Through this logo we like to spread the awareness of connecting globally across the world to contribute ourselves in building a sustainable planet through the initiation of this student chapter. And even after this drastic and huge development in the technology, we still have concern about the nature around us and the living beings within this nature and through measures like SDGs we aspire to create a balance and make a difference. Hence, <em>'Changing the World'</em> little by little...
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   SINGLE DIGNITARY CARD (WITH ZOOM IN SCROLL + BLUE CAP + SHADOW)
══════════════════════════════════════════════════════════ */
const DignitaryCard = ({ name, title, institution, photo, message, reverse }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(11,36,71,0.15)] hover:shadow-[0_30px_70px_rgba(11,36,71,0.25)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
  >
    {/* Blue Cap Header Banner */}
    <div className="bg-sparkBlue text-white font-black text-base md:text-lg py-3 px-8 tracking-wider text-center uppercase border-b border-sparkLightBlue/50 shadow-inner whitespace-pre-line">
      {title}
    </div>

    {/* Card Content Body */}
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 p-8 md:p-10 items-center lg:items-start`}>
      {/* Increased Dignitary Photo + Name block */}
      <div className="flex flex-col items-center justify-start gap-5 lg:w-72 shrink-0">
        <div className="w-60 h-60 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-sparkAccent/20">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="text-center">
          <h4 className="font-black text-sparkBlue text-lg md:text-xl leading-snug">{name}</h4>
          <p className="text-sparkAccent font-bold text-sm mt-1 whitespace-pre-line">{title}</p>
          <p className="text-slate-500 text-xs mt-0.5">{institution}</p>
        </div>
      </div>

      {/* Message Text */}
      <div className="flex-1 relative pt-2">
        <span className="text-sparkAccent/15 text-[110px] font-serif leading-none absolute -top-8 -left-4 select-none pointer-events-none">"</span>
        <div className="relative z-10 space-y-3">
          {message.map((para, i) => (
            <p key={i} className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ══════════════════════════════════════════════════════════
   DIGNITARIES DATA
══════════════════════════════════════════════════════════ */
const dignitaries = [
  {
    name: 'Dr. K N Subramanya',
    title: 'Principal',
    institution: 'RV College of Engineering',
    photo: '/images/princi.jpg',
    reverse: false,
    message: [
      'The collaboration between RV College of Engineering and IUCEE has flourished for over a decade, driving several impactful initiatives that enhance academic innovation and experiential learning. One of the key outcomes of this partnership was the formation of the SPARK section four years ago, which has since delivered remarkable results.',
      "Inspired by SPARK's success, the SPARK Chapter was initiated to empower students to lead innovative activities, participate in national and international competitions, and cultivate strong leadership qualities.",
      'As we thank the outgoing SPARK committee for their dedicated efforts, we warmly welcome the new SPARK committee to carry forward this vision. May this team of 2025-26 take academic excellence to new heights at RV College of Engineering.',
      'Wishing you all the very best!',
    ],
  },
  {
    name: 'Dr. K S Geetha',
    title: 'Vice Principal',
    institution: 'RV College of Engineering',
    photo: '/images/vp.jpeg',
    reverse: true,
    message: [
      'It is with immense pride and joy that I extend my heartfelt congratulations to the SPARK club of RV College of Engineering on another remarkable year.',
      'As a faculty coordinator, I am honored to be part of a community that champions hands-on learning, teamwork, and leadership. This year, the chapter has excelled in bridging classroom learning with real-world applications of technology through various industrial trips and awareness programs on cyber security.',
      'Coordinating events, workshops, and projects has allowed me to witness the impressive capabilities of our students. SPARK is not just shaping their technical skills but also grooming them as future leaders. The chapter has been a catalyst for innovation on our campus, and I am thrilled to see students engaged in meaningful projects and collaborations with industry experts. The unique platform provided by SPARK enables students to develop a holistic skill set, combining technical proficiency with creativity and problem-solving abilities.',
      '"Leadership is the capacity to translate vision into reality." – Warren Bennis',
      'Congratulations on your achievements, and I wish you all the very best for the future.',
    ],
  },
  {
    name: 'Dr. Shanmukha N',
    title: 'Faculty Advisor & Head of Department,\nMechanical Engineering',
    institution: 'RV College of Engineering',
    photo: '/images/dean.jpg',
    reverse: false,
    message: [
      'As the Faculty Advisor of SPARK, I take immense pride in being part of a vibrant and forward-thinking community that consistently fosters curiosity, innovation, and holistic learning.',
      'SPARK has emerged as a transformative force on campus, nurturing a culture where students are encouraged to think beyond textbooks and engage deeply with real-world challenges. Through a wide range of hands-on activities — be it technical workshops, interdisciplinary projects, or industry visits — students are developing their technical acumen and soft skills such as communication, teamwork, and leadership.',
      'I have been privileged to witness the evolution of students as they take ownership of ideas, collaborate across domains, and bring their visions to life. These experiences, I believe, are instrumental in shaping them into future-ready professionals and responsible global citizens.',
      'The chapter has also played a significant role in strengthening our ties with the industry, providing students with exposure to current technologies, market trends, and expectations from the professional sphere.',
      'I am genuinely proud of what the students have accomplished so far, and I am confident that SPARK will continue to evolve as a beacon of creativity, collaboration, and excellence. Congratulations to the entire team for their incredible efforts. I wish you continued success and many more milestones ahead!',
    ],
  },
  {
    name: 'Dr. Prapulla S B',
    title: 'Faculty Co-ordinator & Associate Professor, Computer Science and Engineering',
    institution: 'RV College of Engineering',
    photo: '/images/psb.jpg',
    reverse: true,
    message: [
      "Honored to welcome passionate student leaders committed to transforming engineering education. SPARK – Study through Projects and Activities for Renewing Knowledge – is more than a name; it's a mindset focused on growth, action, and reflection.",
      "Aligned with IUCEE's vision, SPARK encourages student-driven, globally aware, and socially responsible learning. It operates through various focus areas, from organizing events that energize learning to building strong industry connections that bring real-world experience into the classroom.",
      'It also values creativity through social media, fosters inclusion and leadership through women empowerment, and inspires academic growth through research and innovation. SPARK empowers students to think critically, act collaboratively, and lead with integrity.',
      'To our new leaders: lead with heart, serve with purpose, and let SPARK continue to light the way. Let SPARK keep igniting minds and lighting the way forward!',
    ],
  },
];

/* ══════════════════════════════════════════════════════════
   DIGNITARIES SECTION
══════════════════════════════════════════════════════════ */
const DignitariesSection = () => (
  <section className="w-full py-20 px-6 md:px-12 xl:px-24 bg-white">
    <div className="max-w-screen-xl mx-auto">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-black text-sparkBlue mb-14 leading-tight text-center">
          Dignitaries' Messages
        </h2>
      </Reveal>

      <div className="flex flex-col gap-10">
        {dignitaries.map((d) => (
          <DignitaryCard key={d.name} {...d} />
        ))}
      </div>
    </div>
  </section>
);

export { AboutLogo, DignitariesSection };
