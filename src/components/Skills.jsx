
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Bot,
  Bug,
  Smartphone,
  Cloud,
} from "lucide-react";

const skills = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Crafting beautiful, responsive, and interactive interfaces using React, Tailwind CSS, and modern web technologies.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building secure APIs, managing databases, and powering applications with Node.js, Express, and MongoDB.",
    icon: Server,
  },
  {
    number: "03",
    title: "Bot Making",
    description:
      "Developing smart Telegram bots and automation tools that simplify tasks and make everyday processes easier.",
    icon: Bot,
  },
  {
    number: "04",
    title: "Debugging",
    description:
      "Finding bugs, solving complex errors, and turning broken code into clean, reliable, and functional software.",
    icon: Bug,
  },
  {
    number: "05",
    title: "Mobile Development",
    description:
      "Exploring mobile-first experiences and building applications designed to feel smooth across different devices.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Cloud Development",
    description:
      "Deploying applications, managing hosting, and bringing projects to life with platforms like Render and Vercel.",
    icon: Cloud,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#3E2723] px-5 py-24 text-[#241b16] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#95613e]">
            What I Do
          </p>

          <h2 className="font-serif text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Skills &{" "}
            <span className="font-serif italic text-[#95613e]">
              Expertise.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#76685e] sm:text-lg">
            A blend of creativity, technical skills, and problem-solving
            to bring ideas to life through technology.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[290px] cursor-pointer overflow-hidden rounded-2xl border border-[#a67b5b]/20 bg-[#a67b5b] p-7 text-white shadow-sm transition-colors duration-500 hover:bg-white hover:text-[#241b16] hover:shadow-xl sm:p-9"
              >
                {/* Number and Icon */}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-white/70 transition-colors duration-500 group-hover:text-[#95613e]">
                    / {skill.number}
                  </span>

                  <div className="rounded-full border border-white/30 p-3 transition-all duration-500 group-hover:border-[#95613e]/30 group-hover:bg-[#f8f5f0]">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="transition-colors duration-500 group-hover:text-[#95613e]"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-4 font-serif text-3xl font-black italic leading-tight transition-colors duration-500 sm:text-4xl">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium leading-7 text-white/85 transition-colors duration-500 group-hover:text-[#76685e] sm:text-base">
                  {skill.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#95613e] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;