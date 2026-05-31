"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, GraduationCap, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import styles from './StudyMalaysiaSection.module.css';

const universities = [
  {
    name: "University of Malaya (UM)",
    abbr: "UM",
    type: "public",
    rank: "QS Top 70 Asia",
    desc: "Malaysia's oldest and most prestigious research university, globally recognised for academic excellence across disciplines.",
    programs: ["Medicine & Health Sciences", "Engineering", "Law", "Business & Economics", "Arts & Social Sciences"],
    intakes: ["March", "July"],
    highlight: "Top Ranked"
  },
  {
    name: "University Technology Malaysia (UTM)",
    abbr: "UTM",
    type: "public",
    rank: "QS Top 150 Asia",
    desc: "A leading technical university specialising in engineering, technology and innovation with strong industry partnerships.",
    programs: ["Civil & Structural Engineering", "Computing", "Chemical Engineering", "Built Environment", "Management"],
    intakes: ["March", "July", "September"],
    highlight: "Top Ranked"
  },
  {
    name: "University Utara Malaysia (UUM)",
    abbr: "UUM",
    type: "public",
    rank: null,
    desc: "Malaysia's management-focused public university, renowned for its business, accountancy and information technology faculties.",
    programs: ["Business Management", "Accounting & Finance", "IT & Computing", "International Affairs", "Education"],
    intakes: ["March", "September"],
    highlight: null
  },
  {
    name: "University Tun Abdul Razak (UNIRAZAK)",
    abbr: "UR",
    type: "private",
    rank: null,
    desc: "A forward-thinking private university offering flexible programmes in business, law and technology for working professionals.",
    programs: ["Business Administration", "Law", "Information Technology", "Education", "Finance"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "University Tenaga National (UNITEN)",
    abbr: "UN",
    type: "private",
    rank: null,
    desc: "A TNB-owned private university excelling in engineering, technology and business education with strong industry exposure.",
    programs: ["Electrical & Power Engineering", "Civil Engineering", "Computer Science", "Business", "Accounting"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "University Sultan Zainal Abidin (UNISZA)",
    abbr: "UZ",
    type: "public",
    rank: null,
    desc: "A comprehensive public university with specialisations in Islamic studies, medicine, agriculture and social sciences.",
    programs: ["Islamic Contemporary Studies", "Medicine & Health", "Agriculture & Food Sciences", "Business", "Creative Arts"],
    intakes: ["March", "September"],
    highlight: null
  },
  {
    name: "University Selangor (UNISEL)",
    abbr: "US",
    type: "private",
    rank: null,
    desc: "An affordable private university under Selangor state offering quality education in engineering, business and creative arts.",
    programs: ["Engineering", "Business", "IT & Computing", "Education", "Creative Design"],
    intakes: ["March", "July"],
    highlight: null
  },
  {
    name: "University of Cyberjaya",
    abbr: "UC",
    type: "private",
    rank: null,
    desc: "A health sciences-focused private university located in Malaysia's intelligent city, offering cutting-edge medical and business programmes.",
    programs: ["Medicine", "Nursing & Allied Health", "Pharmacy", "Business", "Computing"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "University Malaysia-Wales",
    abbr: "UW",
    type: "private",
    rank: null,
    desc: "A joint venture with the University of Wales offering UK-linked degrees at Malaysian tuition fees across business and technology.",
    programs: ["Business Administration", "IT & Computing", "Engineering", "Financial Management", "Human Resource"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "University Malaysia of Computer Science & Engineering (UNIMY)",
    abbr: "MY",
    type: "private",
    rank: null,
    desc: "A niche institution focused exclusively on computing and engineering, producing highly specialised tech graduates.",
    programs: ["Computer Science", "Software Engineering", "Network Technology", "Cybersecurity", "Data Science"],
    intakes: ["March", "July"],
    highlight: null
  },
  {
    name: "University Kuala Lumpur (UNIKL)",
    abbr: "KL",
    type: "public",
    rank: null,
    desc: "A unique public university with industry-embedded campuses across Malaysia, bridging academia and the engineering sector.",
    programs: ["Industrial Technology", "Engineering", "Business", "Medical Electronics", "Aviation"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "Taylor's University",
    abbr: "TU",
    type: "private",
    rank: "QS Top 5 Private MY",
    desc: "One of Malaysia's highest-ranked private universities, renowned for hospitality, law, medicine and business programmes.",
    programs: ["Hospitality & Tourism", "Law", "Medicine", "Business & Commerce", "Engineering & Built Environment"],
    intakes: ["March", "July", "October"],
    highlight: "Top Private"
  },
  {
    name: "Sunway University",
    abbr: "SW",
    type: "private",
    rank: "QS Top 10 Private MY",
    desc: "A globally oriented private university with strong ties to Sunway Group, offering programmes linked to Lancaster University UK.",
    programs: ["Business & Management", "Computing", "Medical Sciences", "Liberal Arts", "Engineering"],
    intakes: ["March", "July", "October"],
    highlight: "Top Private"
  },
  {
    name: "SEGI University",
    abbr: "SG",
    type: "private",
    rank: null,
    desc: "A long-established private university with multiple campuses offering a wide range of undergraduate and postgraduate programmes.",
    programs: ["Pharmacy", "Business", "Computing & IT", "Dentistry", "Engineering"],
    intakes: ["January", "March", "July", "October"],
    highlight: null
  },
  {
    name: "Nilai University (NU)",
    abbr: "NU",
    type: "private",
    rank: null,
    desc: "A private university with a strong international student community, offering programmes in business, engineering and computing.",
    programs: ["Business Administration", "Engineering", "Computing", "Education", "Biotechnology"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "Multimedia University (MMU)",
    abbr: "MM",
    type: "private",
    rank: "QS Top 15 Private MY",
    desc: "Founded by the Malaysian government, MMU is a tech-forward private university known for IT, engineering and creative technology.",
    programs: ["Computer Science & IT", "Engineering", "Business", "Creative Multimedia", "Cybersecurity"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "Lincoln University College",
    abbr: "LC",
    type: "private",
    rank: null,
    desc: "A fast-growing private university offering highly competitive health sciences and professional programmes to international students.",
    programs: ["Medicine & Surgery", "Dentistry", "Pharmacy", "Business", "Engineering"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "London School of Business and Finance Malaysia (LSBF)",
    abbr: "LB",
    type: "private",
    rank: null,
    desc: "Malaysian campus of the prestigious London brand, offering globally recognised qualifications in finance, accounting and business.",
    programs: ["ACCA", "Business Administration", "Finance & Investments", "International Management", "CFA Prep"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "INTI International University",
    abbr: "II",
    type: "private",
    rank: null,
    desc: "Part of Laureate International Universities, INTI offers twinning and transfer programmes with 190+ universities worldwide.",
    programs: ["Business & Management", "Engineering", "Computing", "Hospitality", "Mass Communication"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "International Islamic University Malaysia (IIUM)",
    abbr: "IU",
    type: "public",
    rank: null,
    desc: "A unique public university integrating Islamic values with modern academic disciplines across law, medicine and engineering.",
    programs: ["Islamic Revealed Knowledge", "Law", "Medicine & Health", "Engineering", "Economics"],
    intakes: ["March", "September"],
    highlight: null
  },
  {
    name: "City University",
    abbr: "CU",
    type: "private",
    rank: null,
    desc: "An established private university in Petaling Jaya offering professional and technical programmes with strong career outcomes.",
    programs: ["Business Administration", "Computing & IT", "Architecture", "Engineering", "Accounting"],
    intakes: ["March", "July", "October"],
    highlight: null
  },
  {
    name: "Xiamen University Malaysia (XMUM)",
    abbr: "XM",
    type: "private",
    rank: "First Chinese Uni Overseas",
    desc: "The first overseas campus of a Chinese university. XMUM offers a unique blend of Sino-international education in Malaysia.",
    programs: ["Business", "Computer Engineering", "Chinese Language", "Economics", "Environmental Science"],
    intakes: ["March", "September"],
    highlight: "Unique"
  },
  {
    name: "Asia Pacific University (APU)",
    abbr: "AP",
    type: "private",
    rank: "5-Star QS Rating",
    desc: "A top-rated private university for technology and computing, consistently achieving 5-Star QS ratings and 100% graduate employment.",
    programs: ["Computing & IT", "Engineering", "Business", "Digital Innovation", "Cybersecurity"],
    intakes: ["January", "April", "July", "October"],
    highlight: "5-Star QS"
  },
  {
    name: "University Tun Hussein Onn Malaysia (UTHM)",
    abbr: "TH",
    type: "public",
    rank: null,
    desc: "A technical public university specialising in engineering, applied sciences and technology education in southern Malaysia.",
    programs: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Applied Sciences", "Business"],
    intakes: ["March", "September"],
    highlight: null
  },
  {
    name: "YES International College",
    abbr: "YC",
    type: "college",
    rank: null,
    desc: "A pathway college offering foundation and diploma programmes that prepare international students for degree entry at partner universities.",
    programs: ["Foundation in Science", "Foundation in Business", "Diploma in IT", "Diploma in Business", "A-Levels"],
    intakes: ["Monthly"],
    highlight: null
  },
  {
    name: "Mont Royale International College",
    abbr: "MR",
    type: "college",
    rank: null,
    desc: "An international college offering Swiss-inspired hospitality and business diploma programmes with European accreditation.",
    programs: ["Hospitality Management", "Culinary Arts", "Business Management", "Event Management", "Tourism"],
    intakes: ["Monthly"],
    highlight: null
  },
  {
    name: "Brighton International School",
    abbr: "BI",
    type: "college",
    rank: null,
    desc: "A pre-university institution providing A-Levels, foundation and diploma programmes for students transitioning to top universities.",
    programs: ["Cambridge A-Levels", "Foundation in Science", "Foundation in Arts", "Diploma in Business", "IGCSE"],
    intakes: ["Monthly"],
    highlight: null
  }
];

const universityBranding: Record<string, { domain: string; coverImage?: string; localLogo?: string }> = {
  "UM": { domain: "um.edu.my", coverImage: "um-cover.webp", localLogo: "/assets/institutions/um-logo.webp" },
  "UTM": { domain: "utm.my", coverImage: "utm-cover.webp" },
  "UUM": { domain: "uum.edu.my", coverImage: "uum-cover.webp" },
  "UR": { domain: "unirazak.edu.my", coverImage: "unirazak-cover.webp" },
  "UN": { domain: "uniten.edu.my", coverImage: "uniten-cover.webp" },
  "UZ": { domain: "unisza.edu.my", coverImage: "unisza-cover.webp" },
  "US": { domain: "unisel.edu.my", coverImage: "unisel-cover.webp" },
  "UC": { domain: "cyberjaya.edu.my" },
  "UW": { domain: "umw.edu.my" },
  "MY": { domain: "unimy.edu.my", coverImage: "unimy-cover.webp" },
  "KL": { domain: "unikl.edu.my", coverImage: "unikl-cover.webp" },
  "TU": { domain: "taylors.edu.my", coverImage: "taylors-cover.webp" },
  "SW": { domain: "sunway.edu.my", coverImage: "sunway-cover.webp" },
  "SG": { domain: "segi.edu.my", coverImage: "segi-cover.webp" },
  "NU": { domain: "nilai.edu.my" },
  "MM": { domain: "mmu.edu.my", coverImage: "mmu-cover.webp" },
  "LC": { domain: "lincoln.edu.my", coverImage: "lincoln-cover.webp" },
  "LB": { domain: "lsbf.edu.sg", coverImage: "lsbf-cover.webp" },
  "II": { domain: "newinti.edu.my", coverImage: "inti-cover.webp" },
  "IU": { domain: "iium.edu.my", coverImage: "iium-cover.webp" },
  "CU": { domain: "city.edu.my" },
  "XM": { domain: "xmu.edu.my", coverImage: "xiamen-cover.webp" },
  "AP": { domain: "apu.edu.my", coverImage: "apu-cover.webp" },
  "TH": { domain: "uthm.edu.my", coverImage: "uthm-cover.webp" },
  "YC": { domain: "yes.edu.my", coverImage: "yes-college-cover.webp" },
  "MR": { domain: "montroyale.edu.my" },
  "BI": { domain: "brighton.edu.my" }
};

function getIconLetter(name: string) {
  return name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('') || name[0];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 140,
      damping: 18
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.94,
    y: 15,
    transition: { duration: 0.25, ease: "easeInOut" } 
  }
} as const;

export default function StudyMalaysiaSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

  const filteredUniversities = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return universities.filter(u => {
      const nameMatch = u.name.toLowerCase().includes(q);
      const progMatch = u.programs.join(' ').toLowerCase().includes(q);
      const typeMatch = currentFilter === 'all' || u.type === currentFilter;
      return (nameMatch || progMatch) && typeMatch;
    });
  }, [searchQuery, currentFilter]);

  const handleEnquire = (name: string) => {
    alert(`Thank you for your interest in ${name}!\n\nA NextPath Global consultant will contact you shortly.`);
  };

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLabel}>
            <Sparkles size={13} style={{ color: '#d4af37' }} />
            Study in Malaysia
          </div>
          <h1>World-Class Education<br />in the <span>Heart of Asia</span></h1>
          <p>Partner with NextPath Global to enroll in Malaysia's top universities. Affordable tuition, globally recognised degrees, and seamless student visa processing — all in one place.</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><strong>27+</strong><span>Partner Universities</span></div>
            <div className={styles.heroStat}><strong>200+</strong><span>Study Programmes</span></div>
            <div className={styles.heroStat}><strong>4×</strong><span>Annual Intakes</span></div>
            <div className={styles.heroStat}><strong>100%</strong><span>Visa Support</span></div>
          </div>
        </div>
      </section>
      <div className={styles.goldDivider}></div>

      {/* STICKY CONTROLS */}
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.searchWrap}>
            <Search size={18} />
            <input 
              className={styles.searchInput} 
              type="text" 
              placeholder="Search university or program…" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterBtns}>
            {['all', 'public', 'private', 'college'].map(filter => (
              <button 
                key={filter}
                className={`${styles.filterBtn} ${currentFilter === filter ? styles.filterBtnActive : ''}`}
                onClick={() => setCurrentFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <span className={styles.countBadge}>Showing <strong>{filteredUniversities.length}</strong> institutions</span>
        </div>
      </div>

      {/* GRID */}
      <div className={styles.gridSection}>
        <div className={styles.sectionHead}>
          <h2>Our Partner Institutions</h2>
          <p>Click <strong>Enquire Now</strong> on any university to start your application with NextPath Global.</p>
        </div>
        
        <motion.div 
          layout
          className={styles.universityGrid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {filteredUniversities.map((u, idx) => {
              const typeClass = u.type === 'public' ? styles.tagPublic : (u.type === 'private' ? styles.tagPrivate : styles.tagCollege);
              const typeLabel = u.type.charAt(0).toUpperCase() + u.type.slice(1) + (u.type === 'college' ? '' : ' University');

              return (
                <motion.div 
                  layout
                  key={u.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={styles.card}
                >
                  <div className={styles.cardBanner}>
                    {universityBranding[u.abbr]?.coverImage ? (
                      <img 
                        src={`/assets/institutions/${universityBranding[u.abbr].coverImage}`} 
                        alt={`${u.name} Campus`} 
                        className={styles.bannerImg}
                      />
                    ) : (
                      <div className={styles.bannerGradient} />
                    )}
                  </div>

                  <div className={styles.cardTop}>
                    <div className={styles.uniIcon}>
                      {(() => {
                        const branding = universityBranding[u.abbr];
                        const logoSrc = branding?.localLogo;
                        return logoSrc ? (
                          <img 
                            src={logoSrc} 
                            alt={`${u.name} logo`} 
                            className={styles.uniLogoImg}
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : null;
                      })()}
                      <span className={styles.uniIconInitials}>{getIconLetter(u.name)}</span>
                    </div>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardName}>{u.name}</div>
                      <div className={styles.tagRow}>
                        <span className={`${styles.tag} ${typeClass}`}>{typeLabel.trim()}</span>
                        {u.highlight && <span className={`${styles.tag} ${styles.tagRank}`}>★ {u.highlight}</span>}
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardDesc}>{u.desc}</p>
                    <div className={styles.infoRows}>
                      <div className={styles.infoRow}>
                        <GraduationCap className={styles.infoIcon} />
                        <div>
                          <span className={styles.infoLabel}>Popular Programmes</span>
                          <div className={styles.programChips}>
                            {u.programs.slice(0, 3).map((prog, pIdx) => (
                              <span key={pIdx} className={styles.programChip}>
                                {prog}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.intakeChips}>
                      {u.intakes.map((intake, i) => (
                        <span key={i} className={styles.intakeChip}>{intake}</span>
                      ))}
                    </div>
                    <button className={styles.enquireBtn} onClick={() => handleEnquire(u.name)}>
                      Enquire Now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredUniversities.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.noResults}
          >
            <AlertCircle size={40} style={{ color: '#94a3b8', marginBottom: '16px' }} />
            <p>No universities match your search. Try a different keyword or filter.</p>
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className={styles.ctaBar}>
        <h3>Ready to Start Your Journey?</h3>
        <p>Our consultants will guide you from university selection to visa approval — every step of the way.</p>
        <a href="/student-assessment" className={styles.ctaBtn}>
          Get Free Consultation
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
