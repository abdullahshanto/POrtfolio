import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  ExternalLink,
  Code,
  Terminal,
  Braces,
  FileText,
  ArrowRight,
  Menu,
  Heart,
  Phone,
  Sparkles,
} from 'lucide-react';
import heroImg from './assets/WhatsApp Image 2026-05-10 at 10.48.13 PM.jpeg';
import cvPdf from './assets/24524203177 (1).pdf';

const EMAIL = 'abdullahshanto19@gmail.com';
const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=';

const ROLES = [
  'Computer Science Engineer',
  'Full-Stack Developer',
  'Gen AI Enthusiast',
  'API Builder',
  'Problem Solver',
];

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.4 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.824 1.102.824 2.222 0 1.606-.015 2.896-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.597 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function useTypewriter() {
  const roles = ROLES;
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1400);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === '') {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      deleting ? 38 : 82,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

const projects = [
  {
    title: 'RAG Book Assistant',
    tech: ['Python', 'LangChain', 'Mistral AI', 'Chroma'],
    desc: 'Retrieval-Augmented Generation for PDF Q&A using Mistral AI and Chroma vector storage.',
    link: 'https://github.com/abdullahshanto/RAG',
  },
  {
    title: 'E-Commerce Platform',
    tech: ['React 19', 'Redux', 'Tailwind'],
    desc: 'Full web application with product browsing, cart management, and authentication.',
    link: 'https://github.com/abdullahshanto/React_JS/tree/main/E-Commerce',
  },
  {
    title: 'REST-API Server',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    desc: 'Secure client-server communication handling CRUD operations with JWT Authentication.',
    link: 'https://github.com/abdullahshanto/Rest-API',
  },
  {
    title: 'Student CRUD System',
    tech: ['MySQL', 'Node.js', 'Express'],
    desc: 'Beginner-friendly REST API for managing student records with MySQL integration.',
    link: 'https://github.com/abdullahshanto/My_SQL-project',
  },
  {
    title: 'Payroll System',
    tech: ['Core Java', 'OOP'],
    desc: 'Menu-driven employee payroll management system demonstrating core OOP principles in Java.',
    link: 'https://github.com/abdullahshanto/OOP',
  },
];

const edu = [
  {
    title: 'Bachelor of Science in CSE',
    school: 'Bangladesh University of Professionals (BUP)',
    period: '2024 – 2027 (Expected)',
    result: 'CGPA: 3.80 / 4.00',
  },
  {
    title: 'Higher Secondary Certificate',
    school: 'Govt. Science College, Tejgaon, Dhaka',
    period: '2022',
    result: 'GPA: 5.00 / 5.00',
  },
  {
    title: 'Secondary School Certificate',
    school: 'Feni Govt. Pilot High School, Feni',
    period: '2020',
    result: 'GPA: 5.00 / 5.00',
  },
];

const skillGroups = [
  {
    icon: Braces,
    title: 'Languages',
    chips: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'Java'],
  },
  {
    icon: Code,
    title: 'Web Development',
    chips: ['React', 'Node.js', 'Express.js', 'Redux', 'Tailwind', 'REST APIs'],
  },
  {
    icon: Terminal,
    title: 'AI / ML',
    chips: ['Gen AI', 'LangChain', 'Mistral AI', 'Chroma'],
  },
  {
    icon: FileText,
    title: 'Databases & Tools',
    chips: ['MongoDB', 'MySQL', 'Git & GitHub', 'Postman', 'Docker'],
  },
];

const App = () => {
  const gmailLink = `${GMAIL_COMPOSE}${EMAIL}`;
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const typed = useTypewriter();

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => setScrolled(y > 24));
    return () => unsub();
  }, [scrollY]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="bg-orbs" />
      <div className="grid-overlay" />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="logo">
            Shanto<span>.</span>
          </a>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Hire Me</a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-inner">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 110, damping: 14 }}
              className="hero-avatar-wrap"
              style={{ display: 'inline-flex' }}
            >
              <div className="hero-avatar-ring" />
              <img src={heroImg} alt="Abdullah Al Hossain Shanto" className="hero-avatar" />
            </motion.div>

            <div className="hero-content">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="hero-tag"
              >
                <span className="dot" /> Available for opportunities
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="hero-title"
              >
                Abdullah Al Hossain <span className="hero-title-gradient">Shanto</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="type-line"
              >
                {typed}
                <span className="cursor">|</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hero-bio"
              >
                Computer Science Engineer from <strong>BUP '24 batch</strong>, building intelligent
                applications — from Gen AI tools with LangChain to full-stack platforms with React & Node.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="hero-actions"
              >
                <a href="#projects" className="btn btn-primary">
                  View My Work <ArrowRight size={17} />
                </a>
                <a href={gmailLink} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <Mail size={17} /> Contact Me
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="social-row"
                style={{ justifyContent: 'flex-start' }}
              >
                <a className="social-btn" href="https://github.com/abdullahshanto" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a className="social-btn" href="https://www.linkedin.com/in/abdullah-shanto/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a className="social-btn" href={gmailLink} target="_blank" rel="noreferrer" aria-label="Email">
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="scroll-hint"><ArrowRight size={20} style={{ transform: 'rotate(90deg)' }} /></div>
      </section>

      <section id="about" className="block">
        <div className="container">
          <div className="section-head">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              About Me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-title"
            >
              Turning ideas into <em>working software</em>
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="about-grid"
          >
            <motion.div variants={fadeUp} className="about-text">
              <p>
                I'm <strong>Abdullah Al Hossain Shanto</strong>, a Computer Science student at
                Bangladesh University of Professionals. I build web apps, REST APIs, and
                AI-powered tools.
              </p>
              <p>
                Lately I've been working with <strong>Gen AI</strong>, building intelligent
                assistants using LangChain, Mistral AI, and vector databases.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="quick-facts">
              <div className="quick-facts-title">Quick Facts</div>
              <ul>
                <li>
                  <span className="qf-icon"><MapPin size={17} /></span>
                  <span><strong>Based in</strong> Dhaka, Bangladesh</span>
                </li>
                <li>
                  <span className="qf-icon"><Code size={17} /></span>
                  <span><strong>Languages</strong> C, C++, Java, JS, Python, SQL</span>
                </li>
                <li>
                  <span className="qf-icon"><Sparkles size={17} /></span>
                  <span><strong>Focus</strong> Gen AI, Full-stack, APIs</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="timeline">
            {edu.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="timeline-item"
              >
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <div className="timeline-head">
                    <h4>{item.title}</h4>
                    <span className="timeline-date">{item.period}</span>
                  </div>
                  <p>{item.school}</p>
                  {item.result && <p className="timeline-result">{item.result}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="block">
        <div className="container">
          <div className="section-head">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              Skills
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-title"
            >
              A complete <em>toolkit</em>
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="skills-grid"
          >
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} variants={fadeUp} className="skill-card">
                  <div className="skill-card-head">
                    <span className="skill-icon"><Icon size={20} /></span>
                    <h4>{group.title}</h4>
                  </div>
                  <div className="chips">
                    {group.chips.map((chip) => (
                      <span key={chip} className="chip">{chip}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="block">
        <div className="container">
          <div className="section-head">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-title"
            >
              Featured <em>projects</em>
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="projects-grid"
          >
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="project-card"
              >
                <div className="project-top">
                  <span className="project-index">0{i + 1}</span>
                  <span className="project-link">
                    <ExternalLink size={18} />
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="chips">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="block">
        <div className="container">
          <div className="section-head">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-title"
            >
              Let's <em>build something</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="contact-card"
          >
            <h3>Have an idea or an opportunity?</h3>
            <p>
              I'm always open to discussing new projects, research ideas, or creative ways
              to build elegant software. My inbox is always open.
            </p>
            <div className="contact-actions">
              <a href={gmailLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Send size={17} /> Email Me
              </a>
              <a href={cvPdf} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FileText size={17} /> View CV
              </a>
            </div>
            <div className="contact-meta">
              <span><Mail size={16} /> <a href={gmailLink} target="_blank" rel="noreferrer">abdullahshanto19@gmail.com</a></span>
              <span><Phone size={16} /> <a href="https://wa.me/8801621025819" target="_blank" rel="noreferrer">+880 1621 025 819</a></span>
              <span><LinkedinIcon size={16} style={{ color: 'var(--green)' }} /> <a href="https://www.linkedin.com/in/abdullah-shanto/" target="_blank" rel="noreferrer">LinkedIn</a></span>
              <span><MapPin size={16} /> Mirpur, Dhaka</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Abdullah Al Hossain Shanto</p>
          <p className="made-with">
            Built with React, Framer Motion & <Heart size={14} /> — right here in Dhaka
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;