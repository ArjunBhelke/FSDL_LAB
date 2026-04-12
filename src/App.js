import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";
import Cursor from "./components/Cursor";
import { useEffect, useRef } from "react";

function MagneticIcon({ children }) {
  const ref = useRef();
  useMagnetic(ref);

  return <div ref={ref} className="magnetic">{children}</div>;
}

function useMagnetic(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    const reset = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, [ref]);
}

export default function App() {
  return (
    <>
      <Cursor />
      <div className="app">

        {/* BACKGROUND BLOBS */}
        <div className="bg1"></div>
        <div className="bg2"></div>

        {/* NAVBAR */}
        <nav className="nav">
          <h2 className="logo">Arjun.dev</h2>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <motion.section className="section">
          <h1>
            Building <span>Modern Web Apps</span> with Creativity
          </h1>
          <p>Frontend Developer • React Enthusiast</p>

          <div className="icons">
            <MagneticIcon><FaGithub /></MagneticIcon>
            <MagneticIcon><FaLinkedin /></MagneticIcon>
            <MagneticIcon><FaEnvelope /></MagneticIcon>
          </div>
        </motion.section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am Arjun Bhelke, a passionate developer who enjoys building
            interactive and modern web applications using React and backend technologies.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            <Card title="Student CRUD System" desc="PHP & MySQL based project" />
            <Card title="Portfolio Website" desc="React-based UI project" />
            <Card title="Dashboard" desc="Data visualization system" />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills">
            <Skill name="React" />
            <Skill name="JavaScript" />
            <Skill name="PHP & MySQL" />
            <Skill name="HTML & CSS" />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Email: arjunbhelke12@gmail.com</p>
        </section>

      </div>
    </>
  );
}

function Card({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Skill({ name }) {
  return <div className="skill">{name}</div>;
}