// SPARK IUCEE RVCE Events & Activities Data Store
// Consolidated filters: Industry Connect, Hackathons & Competitions, Industrial Visits, Social Impact & Outreach, Podcasts & Media, Orientations & Campus Events

export const annualReportPdf = "/Annual_Report_2025.pdf";

export const eventsByYear = {
  2023: {
    year: "2023",
    tagline: "Foundational Projects & Initial Milestones",
    description: "The 2023 academic year focused on establishing core project learning workflows and inaugural workshop series.",
    status: "placeholder",
    events: [
      {
        id: "2023-placeholder-1",
        title: "2023 Activity Record (Pending)",
        tag: "Orientations & Campus Events",
        date: "2023 Academic Year",
        location: "RVCE Campus",
        shortDesc: "This section is reserved for the 2023 SPARK team members to populate event archives and project media.",
        fullDesc: "The 2023 event entries are currently open for contribution. Respective team leaders can update this entry in `src/data/eventsData.js` with event titles, dates, descriptions, and media links.",
        images: ["/hero.png"],
        highlights: ["Project-based learning introduction", "Technical workshops", "Inter-departmental collaboration"],
        speakers: ["SPARK 2023 Core Team"],
        stats: { participants: "200+", sessions: "6", projects: "10+" }
      }
    ]
  },
  2024: {
    year: "2024",
    tagline: "Expanding Reach & Industry Connections",
    description: "In 2024, SPARK expanded its footprint with industry collaborations, hands-on workshops, and community initiatives.",
    status: "placeholder",
    events: [
      {
        id: "2024-placeholder-1",
        title: "2024 Activity Record (Pending)",
        tag: "Industry Connect",
        date: "2024 Academic Year",
        location: "RVCE Campus",
        shortDesc: "This section is reserved for the 2024 SPARK team members to populate event archives and project media.",
        fullDesc: "The 2024 event entries are currently open for contribution. Respective team leaders can update this entry in `src/data/eventsData.js` with event titles, dates, descriptions, and media links.",
        images: ["/shakti.png"],
        highlights: ["Industry Connect sessions", "SDG initiatives", "Hands-on engineering projects"],
        speakers: ["SPARK 2024 Core Team"],
        stats: { participants: "400+", sessions: "10", projects: "15+" }
      }
    ]
  },
  2025: {
    year: "2025",
    tagline: "Innovation, Social Impact & Experiential Learning",
    description: "A landmark year featuring 14+ technical workshops, industrial visits, national hackathons, podcasts, and impactful social outreach.",
    status: "active",
    reportPdf: "/Annual_Report_2025.pdf",
    events: [
      {
        id: "razz-security-2025",
        title: "Razz Security – Cybersecurity Workshop",
        tag: "Industry Connect",
        date: "27th December 2024",
        location: "RVCE Campus",
        shortDesc: "Hands-on cybersecurity workshop equipping students with practical knowledge of cyber threats, ethical hacking, and data safety.",
        fullDesc: "A comprehensive hands-on Cyber Security Workshop conducted under the SPARK IUCEE RVCE Student Chapter. The session provided students with real-world exposure to threat identification, vulnerability assessment, data security protocols, ethical hacking techniques, and digital safety practices.",
        images: [
          "/events_2025/event_1/razz_1.jpg",
          "/events_2025/event_1/razz_2.jpg"
        ],
        highlights: [
          "Live demonstration of ethical hacking tools & penetration testing",
          "Data privacy and network security fundamentals",
          "Interactive Q&A on careers in cybersecurity"
        ],
        speakers: ["Razz Security Experts"],
        stats: { participants: "120+", duration: "Full Day", rating: "4.9/5" }
      },
      {
        id: "ai-in-engineering-2025",
        title: "AI in Engineering – Industry Expert Session",
        tag: "Industry Connect",
        date: "17th October 2025",
        location: "Seminar Hall, RVCE",
        shortDesc: "Keynote session by Ms. Girija Kolagada (VP Engineering at Progress Chef) on applying AI, data analytics, and automation in engineering.",
        fullDesc: "Delivered by Ms. Girija Kolagada, Vice President of Engineering at Progress Chef, this session provided students with deep industry insights into how Artificial Intelligence, Machine Learning, and automated data pipelines are transforming modern engineering solutions.",
        images: [
          "/events_2025/event_2/IMG_7905.jpg",
          "/events_2025/event_2/IMG_7917.JPG"
        ],
        highlights: [
          "Real-world enterprise AI implementation case studies",
          "Automated dev operations and DevOps intelligence",
          "Future skills required for AI-driven software architecture"
        ],
        speakers: ["Ms. Girija Kolagada (VP of Engineering, Progress Chef)"],
        stats: { participants: "180+", domain: "AI / DevOps", feedback: "98% Positive" }
      },
      {
        id: "sensor-processor-aiml-quantum-2025",
        title: "Sensors & Processors for AI/ML & Quantum Computing",
        tag: "Industry Connect",
        date: "22nd & 29th November 2025",
        location: "RVCE R&D Block",
        shortDesc: "Two-day workshop exploring hardware architectures, sensor interfaces, and quantum-aware processor optimization.",
        fullDesc: "Organized in collaboration with Anoraniya (The Quantum Club), this intensive two-day workshop focused on emerging hardware requirements for AI/ML and Quantum Systems. Topics covered classical-to-quantum state representation, signal conditioning, sensor hardware integration, and hardware-aware algorithm acceleration.",
        images: [
          "/events_2025/event_3/IMG_8834.jpg",
          "/events_2025/event_3/IMG_8835.jpg"
        ],
        highlights: [
          "Hands-on architectural breakdown of AI accelerator chips",
          "Quantum computing hardware interface protocols",
          "Collaborative project build with Anoraniya Quantum Club"
        ],
        speakers: ["RVCE Faculty & Quantum Research Group"],
        stats: { budget: "₹15,000", days: "2 Days", projects: "12 Prototypes" }
      },
      {
        id: "design-fest-2025",
        title: "Design Fest 2025 (Hardware & Systems)",
        tag: "Hackathons & Competitions",
        date: "20th December 2025",
        location: "RVCE Main Campus",
        shortDesc: "Engineering design competition evaluating hardware-centric and system-level prototypes developed by workshop participants.",
        fullDesc: "Conducted as the grand finale of the AI/ML and Quantum Computing workshop series, Design Fest provided a competitive showcase for participants to present hardware-centric solutions and system-level prototypes to faculty and industry judges.",
        images: [
          "/events_2025/event_9/IMG_0007.jpg",
          "/events_2025/event_9/IMG_20251220_140701.jpg",
          "/events_2025/event_9/IMG_9449.jpg",
          "/events_2025/event_9/IMG_9953.jpg",
          "/events_2025/event_9/IMG_9964 (1).jpg"
        ],
        highlights: [
          "Hardware prototype demonstrations to expert jury",
          "System-level efficiency and scalability evaluations",
          "Prizes and certificates for top hardware designs"
        ],
        speakers: ["Jury Panel of RVCE Professors & Industry Alumni"],
        stats: { teams: "25+", awards: "3 Categories", exhibits: "Hardware & Embedded" }
      },
      {
        id: "eduaithon-2025",
        title: "EduAIthon 2025 – Hackathon",
        tag: "Hackathons & Competitions",
        date: "16th May – 18th May 2025",
        location: "RVCE Innovation Center",
        shortDesc: "36-hour hackathon where 50+ student teams developed innovative AI-driven educational applications and tools.",
        fullDesc: "EduAIthon brought together over 50 student teams from across disciplines to build groundbreaking AI solutions addressing educational challenges. Teams hacked continuously over 3 days, developing AI tutors, automated assessment engines, and personalized learning platforms.",
        images: [
          "/events_2025/event_4/DSC_0348.JPG",
          "/events_2025/event_4/DSC_0670.JPG",
          "/events_2025/event_4/IMG_4902.jpg",
          "/events_2025/event_4/IMG_4953.jpg",
          "/events_2025/event_4/IMG_4975.jpg"
        ],
        highlights: [
          "Over 50+ multi-disciplinary student teams participated",
          "36 hours of continuous coding, mentoring, and prototype building",
          "Industry mentorship from top AI startups and tech firms"
        ],
        speakers: ["IUCEE Mentors & Industry AI Leads"],
        stats: { teams: "50+", duration: "36 Hours", projects: "50+ Prototypes" }
      },
      {
        id: "agastya-foundation-2025",
        title: "Agastya Foundation STEM Outreach",
        tag: "Social Impact & Outreach",
        date: "30th August & 6th September 2025",
        location: "Government Schools, Bengaluru",
        shortDesc: "Student-led STEM teaching sessions in government schools to foster scientific curiosity and practical math learning.",
        fullDesc: "In collaboration with the Agastya Foundation, SPARK members visited local government schools to conduct interactive hands-on science and mathematics demonstrations. The initiative simplified complex scientific principles through play, experiments, and engaging models.",
        images: [
          "/events_2025/event_6/20250830_100023AMByGPSMapCamera.jpg",
          "/events_2025/event_6/20250830_104153amByGPSMapCamera.jpg",
          "/events_2025/event_6/20250830_110855amByGPSMapCamera.jpg",
          "/events_2025/event_6/IMG_20250830_110705.jpg"
        ],
        highlights: [
          "Hands-on science experiment kits for school students",
          "Interactive math puzzle solving sessions",
          "Inspirational mentoring to encourage higher education in STEM"
        ],
        speakers: ["SPARK Outreach Volunteers & Agastya Coordinators"],
        stats: { schoolKids: "300+", sessions: "2 Days", volunteers: "25 RVCE Students" }
      },
      {
        id: "shakti-shiksha-2025",
        title: "Shakti Shiksha – Empowerment Initiative",
        tag: "Social Impact & Outreach",
        date: "23rd October 2025",
        location: "Sri Jnanakshi Vidyaniketan School",
        shortDesc: "Social outreach program focusing on self-awareness, confidence, health, hygiene, and career orientation.",
        fullDesc: "Shakti Shiksha was organized as a social outreach initiative at Sri Jnanakshi Vidyaniketan School. SPARK volunteers engaged with students through interactive discussions, icebreakers, and workshops emphasizing self-confidence, emotional well-being, personal hygiene, and mutual respect.",
        images: [
          "/events_2025/event_7/20251023_140806.jpg",
          "/events_2025/event_7/20251023_14653PMByGPSMapCamera.jpg",
          "/events_2025/event_7/20251023_22607PMByGPSMapCamera.jpg"
        ],
        highlights: [
          "Confidence-building & mental health awareness workshops",
          "Health & personal hygiene guidance",
          "Interactive group discussions and career mentorship"
        ],
        speakers: ["SPARK Women Empowerment Wing"],
        stats: { impact: "Direct School Outreach", satisfaction: "100%", reach: "200+ Students" }
      },
      {
        id: "induction-batch-2025",
        title: "Induction Program for Incoming Batch 2025",
        tag: "Orientations & Campus Events",
        date: "28th August 2025",
        location: "RVCE Campus Auditoriums",
        shortDesc: "A multi-event orientation introducing first-year engineering students to SPARK's project culture and technical wings.",
        fullDesc: "Organized to welcome newly admitted first-year engineering students, this induction program featured a series of four interactive events introducing engineering concepts, team problem-solving challenges, and the chapter's five specialized wings.",
        images: [
          "/events_2025/event_5/20250828_115852.jpg",
          "/events_2025/event_5/20250828_115858.jpg",
          "/events_2025/event_5/20250828_163544.jpg"
        ],
        highlights: [
          "Introduction to SPARK's 5 specialized wings",
          "Hands-on mini engineering challenges for freshers",
          "Senior student Q&A and academic roadmap guidance"
        ],
        speakers: ["SPARK Executive Officers & Faculty Coordinators"],
        stats: { freshersJoined: "250+", subEvents: "4 Sessions", wingPrefects: "31" }
      },
      {
        id: "mystery-exe-2025",
        title: "Mystery.EXE – Technical Treasure Hunt",
        tag: "Hackathons & Competitions",
        date: "5th December 2025",
        location: "RVCE Campus Grounds",
        shortDesc: "High-energy technical treasure hunt with code clues, logic puzzles, and hardware challenges during 8th Mile.",
        fullDesc: "Mystery.EXE was hosted as a flagship technical treasure hunt during RVCE's annual fest, 8th Mile. Teams solved multi-layered algorithmic clues, cryptic debugging challenges, and physical checkpoints across campus to locate hidden targets.",
        images: [
          "/events_2025/event_8/IMG_9080.jpg",
          "/events_2025/event_8/IMG_9088.jpg",
          "/events_2025/event_8/IMG_9106.jpg"
        ],
        highlights: [
          "Multi-stage algorithmic & logical puzzle checkpoints",
          "Fast-paced competitive elimination rounds",
          "Exciting cash prizes and trophies for winning teams"
        ],
        speakers: ["SPARK Fest Team & 8th Mile Coordinators"],
        stats: { participants: "150+ Teams", rounds: "3 Stages", thrill: "Maximum" }
      },
      {
        id: "sdg-photography-2025",
        title: "Through the Eyes of You(th) – SDG Photography",
        tag: "Hackathons & Competitions",
        date: "19th & 25th November 2025",
        location: "Online & RVCE Campus",
        shortDesc: "Two-stage photography competition highlighting Sustainable Development Goals through visual storytelling.",
        fullDesc: "A two-round campus photography competition designed to spread awareness of the UN Sustainable Development Goals (SDGs). Students submitted visual stories capturing climate action, clean energy, quality education, and urban sustainability.",
        images: [
          "/youth.png"
        ],
        highlights: [
          "Two competitive rounds of storytelling photography",
          "Expert evaluation of artistic composition & SDG relevance",
          "Prize pool distributed to top 3 winning visual storytellers"
        ],
        speakers: ["Jury of Professional Photographers & SDG Advocates"],
        stats: { submissions: "80+", prizePool: "₹5,000", rounds: "2 Rounds" }
      },
      {
        id: "avishkar-manthan-2025",
        title: "Avishkar Manthan & National Project Expo",
        tag: "Hackathons & Competitions",
        date: "11th September 2025",
        location: "Statewide / RVCE Representation",
        shortDesc: "SPARK team members won 1st place in Elocution and 1st & 3rd place in Ideathon at Avishkar Manthan.",
        fullDesc: "SPARK members represented RVCE at Avishkar Manthan and national project expos, securing top honors including 1st place in Elocution (Prajwal J, Rupini H, Kavin Krishan, Dakshraj) and 1st & 3rd places in the Ideathon category.",
        images: [
          "/events_2025/event_11/20250908_081130.jpg",
          "/events_2025/event_11/IMG_7074.jpg",
          "/events_2025/event_11/IMG_E7189.JPG",
          "/events_2025/event_11/IMG_E7197.JPG"
        ],
        highlights: [
          "1st Place in Elocution Competition",
          "1st & 3rd Place in Ideathon Innovation Challenge",
          "Recognized among leading student chapters statewide"
        ],
        speakers: ["National Project Jury Panel"],
        stats: { awards: "3 Top Positions", teams: "Multiple RVCE Teams" }
      },
      {
        id: "icf-visit-2025",
        title: "Integral Coach Factory (ICF) Industrial Visit",
        tag: "Industrial Visits",
        date: "9th December 2025",
        location: "Chennai, Tamil Nadu",
        shortDesc: "Industrial visit to ICF Chennai to study railway coach manufacturing, advanced fabrication, and Vande Bharat production lines.",
        fullDesc: "Students visited the world-renowned Integral Coach Factory (ICF) in Chennai. The industrial tour provided firsthand observation of heavy railway coach assembly, robotic welding, bogie fabrication, quality testing, and Vande Bharat express train manufacturing.",
        images: [
          "/events_2025/event_12/IMG-20240517-WA0070.jpg",
          "/events_2025/event_12/IMG-20240524-WA0055.jpg",
          "/events_2025/event_12/IMG-20240524-WA0103.jpg"
        ],
        highlights: [
          "Exclusive tour of Vande Bharat manufacturing bays",
          "Study of heavy mechanical fabrication & industrial robotics",
          "Interaction with senior ICF engineering directors"
        ],
        speakers: ["ICF Senior Technical Engineers"],
        stats: { students: "45+", location: "Chennai", focus: "Railway Engineering" }
      },
      {
        id: "the-insight-podcast-2025",
        title: "The Insight – SPARK Podcast Series",
        tag: "Podcasts & Media",
        date: "Academic Year 2025",
        location: "SPARK Media Studio",
        shortDesc: "Flagship campus podcast connecting faculty, student leaders, and campus clubs (Club Connect series got 1,900+ views).",
        fullDesc: "'The Insight' is SPARK's flagship media initiative bridging faculty and students. Episodes feature in-depth interviews with Principal Dr. K.N. Subramanya, Vice Principal Dr. K.S. Geetha, Dean of Cultural Affairs, and heads of campus clubs.",
        images: [
          "/events_2025/event_13/EP 1.jpg",
          "/events_2025/event_13/pod_3.jpg"
        ],
        highlights: [
          "Exclusive interview episodes with RVCE Principal & Vice Principal",
          "Club Connect series promoting student initiatives across campus",
          "Episode 1 achieved over 1,900+ views online"
        ],
        speakers: ["Faculty Leaders & Student Club Presidents"],
        stats: { views: "1,900+ Views", episodes: "6+ Recorded", reach: "Campus-wide" }
      },
      
    ]
  },
  2026: {
    year: "2026",
    tagline: "Upcoming Vision & Future Roadmap",
    description: "Looking ahead: Deep-tech system integration, international student exchanges, and expanded community impact.",
    status: "placeholder",
    events: [
      {
        id: "2026-placeholder-1",
        title: "2026 Vision & Scheduled Initiatives (Pending)",
        tag: "Industry Connect",
        date: "2026 Academic Year",
        location: "RVCE Campus & Beyond",
        shortDesc: "This section is reserved for the 2026 SPARK core team to list upcoming hackathons, workshops, and project showcases.",
        fullDesc: "The 2026 roadmap is under active planning. Team leads can edit `src/data/eventsData.js` to add upcoming 2026 events, registration links, and promotional media.",
        images: ["/hero.png"],
        highlights: ["Expanded Deep-Tech Hardware Workshops", "Global IUCEE Student Exchange", "Integrated AI & Embedded Labs"],
        speakers: ["Incoming SPARK 2026 Core Team"],
        stats: { plannedEvents: "15+", targetReach: "1000+ Students" }
      }
    ]
  }
};
