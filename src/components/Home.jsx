import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ire from "../assets/ire.jpeg";
import paylynk3 from "../assets/paylynk3.jpeg";
import bot3 from "../assets/bot3.jpeg";
import eduPro from "../assets/eduPro.jpeg";
import rideHigh from "../assets/rideHigh.jpeg";
const projects = [
  {
    title: "Paylynk",
    description:
      "A modern fintech platform designed for seamless digital payments, wallet management, bank connections and financial transactions.",
    image: paylynk3,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    github: "https://github.com/bello1remide2008/paylynk",
  },
  {
    title: "Telegram Wallet Bot",
    description:
      "A Telegram-based wallet management application designed to combine wallet functionality, automation and intelligent financial features.",
    image: bot3,
    technologies: ["Python", "Telegram API", "SQLite"],
    live: "#",
    github: "https://github.com/bello1remide2008/telegram-wallet-bot",
  },
  {
    title: "School Management System",
    description:
      "A comprehensive school management solution designed to streamline administrative tasks, student records, and academic tracking.",
    image: eduPro,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    github: "https://github.com/bello1remide2008/portal",
  },
  {
    title: "Ride high tutorial website ",
    description :
    "A modern tutorial page designed to ensure a seamless learning esperience and ensure registration easier and faster." ,
    image : rideHigh,
    technologies:["HTML", "CSS", "JavaScript"],
    live: "#",
    github:"https://github.com/bello1remide2008/ride-high"
  }
];

const techStack = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Git",
  "REST APIs",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-20">

        {/* Background glow */}
        <div className="absolute top-20 left-[-150px] w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-white/[0.025] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >

              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 rounded-full mb-7"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs md:text-sm text-white/60 tracking-wide">
                  Available for new projects
                </span>
              </motion.div>

              {/* BIG BRAND TEXT */}
              <motion.h1
                variants={fadeUp}
                className="font-serif italic font-black text-[clamp(4rem,12vw,10rem)] leading-[0.78] tracking-[-0.08em] text-white"
              >
                IRECODING
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mt-10 max-w-2xl"
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  Building scalable websites,
                  <span className="text-white/40"> intelligent applications </span>
                  & digital experiences.
                </h2>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-white/50 text-base md:text-lg leading-8"
              >
                I design and build modern digital products that are fast,
                responsive and built to solve real-world problems — from
                powerful web applications to automated systems and APIs.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 mt-9"
              >
                <button
                  onClick={scrollToProjects}
                  className="group flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-semibold hover:bg-white/90 transition"
                >
                  View My Work
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </button>

                <a
                  href="https://github.com/bello1remide2008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/15 bg-white/[0.03] px-6 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  <FaGithub size={19} />
                  GitHub
                </a>
              </motion.div>

              {/* SCROLL */}
              <motion.button
                variants={fadeUp}
                onClick={scrollToAbout}
                className="mt-16 flex items-center gap-3 text-white/40 hover:text-white transition group"
              >
                <span className="text-xs uppercase tracking-[0.25em]">
                  Discover more
                </span>

                <ArrowDown
                  size={17}
                  className="group-hover:translate-y-1 transition"
                />
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >

              {/* Image glow */}
              <div className="absolute inset-10 bg-white/[0.06] blur-3xl rounded-full" />

              <div className="relative w-full max-w-[480px]">

                {/* Replace this with your actual image */}
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03]">

                  <img
                    src={ire}
                    alt="Irecoding"
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Floating label */}
                <div className="absolute -bottom-5 -left-5 md:-left-10 bg-[#0c0c0c] border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-xl">
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    Developer
                  </p>
                  <p className="font-semibold mt-1">
                    Building what's next.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}
      <section
        id="about-preview"
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid lg:grid-cols-[0.35fr_0.65fr] gap-10 lg:gap-24"
          >

            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                01 — About Me
              </span>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                I don't just write code.
                <span className="text-white/35">
                  {" "}
                  I build things people can actually use.
                </span>
              </h2>

              <p className="mt-7 text-white/50 text-base md:text-lg leading-8 max-w-3xl">
                I'm a developer focused on creating modern web applications,
                useful digital products and technology that solves practical
                problems. I enjoy taking an idea from a simple concept and
                turning it into a working product.
              </p>

              <button
                onClick={scrollToAbout}
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold border-b border-white/30 pb-2 hover:border-white transition"
              >
                Explore About Me
                <ArrowUpRight size={17} />
              </button>
            </div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section
        id="projects"
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >

            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                02 — Selected Work
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
                Applications I've built.
              </h2>
            </div>

            <p className="text-white/40 max-w-md leading-7">
              A collection of projects where design, development and
              problem-solving come together.
            </p>

          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group border border-white/[0.08] bg-white/[0.02] rounded-3xl overflow-hidden hover:border-white/20 transition"
              >

                {/* PROJECT IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition" />

                </div>


                {/* CONTENT */}
                <div className="p-7">

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center">
                      <ArrowUpRight size={17} />
                    </div>

                  </div>

                  <p className="text-white/40 leading-7 mt-4 text-sm">
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1.5"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>


                  {/* LINKS */}
                  <div className="flex items-center gap-5 mt-7">

                    <a
                      href={project.live}
                      className="text-sm font-medium flex items-center gap-2 hover:text-white/60 transition"
                    >
                      Live Project
                      <ExternalLink size={15} />
                    </a>

                    <a
                      href={project.github}
                      className="text-sm font-medium flex items-center gap-2 text-white/40 hover:text-white transition"
                    >
                      <FaGithub size={15} />
                      Source
                    </a>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          GITHUB
      ===================================================== */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-14 lg:p-20"
          >

            <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">

              <div>

                <div className="flex items-center gap-3 text-white/40">
                  <FaGithub size={20} />
                  <span className="text-xs uppercase tracking-[0.25em]">
                    03 — GitHub
                  </span>
                </div>

                <h2 className="mt-6 text-4xl md:text-6xl font-semibold max-w-3xl leading-tight">
                  Don't just take my word for it.
                  <span className="text-white/35">
                    {" "}
                    See what I'm building.
                  </span>
                </h2>

                <p className="mt-6 text-white/40 max-w-xl leading-7">
                  Explore my repositories, experiments and projects on GitHub.
                  See the code behind the applications and the things I'm
                  constantly learning and building.
                </p>

              </div>


              <a
                href="https://github.com/bello1remide2008"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-black rounded-full px-7 py-4 font-semibold whitespace-nowrap hover:bg-white/90 transition"
              >
                <FaGithub size={20} />
                Visit My GitHub
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </a>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          TECH STACK
      ===================================================== */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.07]">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div className="flex items-center gap-3 text-white/30">
              <Code2 size={18} />

              <span className="text-xs uppercase tracking-[0.3em]">
                04 — Technology
              </span>
            </div>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
              Tools I build with.
            </h2>

            <div className="flex flex-wrap gap-3 mt-12">

              {techStack.map((tech) => (

                <span
                  key={tech}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/30 transition"
                >
                  {tech}
                </span>

              ))}

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >

          <Sparkles
            className="mx-auto text-white/30 mb-7"
            size={28}
          />

          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Let's build something
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
            Have an idea?
          </h2>

          <p className="mt-6 text-white/40 text-lg max-w-xl mx-auto leading-8">
            Let's turn that idea into something real, useful and beautifully
            engineered.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-white text-black px-7 py-4 rounded-full font-semibold hover:bg-white/90 transition"
          >
            Let's Talk
            <ArrowUpRight size={19} />
          </a>

        </motion.div>

      </section>

    </main>
  );
}

 