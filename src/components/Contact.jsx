import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      title: "Phone Number",
      value: "07087068823",
      href: "tel:07087068823",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Email Address",
      value: "iremideb82@gmail.com",
      href: "mailto:iremideb82@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      title: "Instagram",
      value: "be_dat_ireee",
      href: "https://instagram.com/be_dat_ireee",
      icon: <FaInstagram />,
    },
    {
      title: "Twitter / X",
      value: "Ire coding",
      href: "https://x.com/",
      icon: <FaTwitter />,
    },
    {
      title: "TikTok",
      value: "be.dat.ire.guy",
      href: "https://www.tiktok.com/@be.dat.ire.guy",
      icon: <FaTiktok />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-16 lg:px-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-[-100px] h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 font-bold uppercase tracking-[0.4em] text-orange-400">
            Get in touch
          </p>

          <h2 className="text-5xl font-black leading-tight tracking-tighter sm:text-6xl md:text-8xl">
            LET'S
            <br />
            <span className="text-orange-500 transition-colors duration-500 hover:text-white">
              CONNECT.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-zinc-400 md:text-xl">
            Want to get in touch with me or make use of my services? You're in
            the right place. Whether you need a website, a web application, a
            backend system, a bot, or help bringing your next big idea to life,
            I'm ready to hear from you.
          </p>

          <p className="mt-4 max-w-2xl font-bold leading-7 text-zinc-200">
            Have a project in mind? Need a developer who can turn ideas into
            reality? Let's talk, collaborate, and build something amazing
            together.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact details */}
          <div>
            <h3 className="mb-7 text-2xl font-black tracking-tight md:text-3xl">
              CONTACT <span className="text-orange-500">DETAILS</span>
            </h3>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={
                    contact.title === "Phone Number" ||
                    contact.title === "Email Address"
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 8 }}
                  className="group flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-2xl text-orange-400 transition-all duration-300 group-hover:bg-white group-hover:text-orange-500">
                    {contact.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-orange-100">
                      {contact.title}
                    </p>
                    <p className="mt-1 break-words text-base font-black text-white sm:text-lg">
                      {contact.value}
                    </p>
                  </div>

                  <FaArrowRight className="shrink-0 text-orange-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-black">
              <FaPaperPlane />
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-orange-400">
              Got an idea?
            </p>

            <h3 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              LET'S BUILD
              <span className="block text-orange-500">
                SOMETHING GREAT.
              </span>
            </h3>

            <p className="mt-6 text-lg font-medium leading-8 text-zinc-400">
              Every great project starts with a conversation. Tell me what
              you're thinking, what you want to build, or how I can help.
              Let's turn your vision into something real.
            </p>

            <motion.a
              href="mailto:iremideb82@gmail.com?subject=Project%20Enquiry"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-black text-black transition-colors duration-300 hover:bg-white"
            >
              LET'S TALK
              <FaArrowRight />
            </motion.a>

            <p className="mt-8 border-t border-zinc-800 pt-6 text-sm font-bold uppercase tracking-widest text-zinc-600">
              IRECODING — Turning ideas into reality.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm font-bold text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-500">IRECODING</span>. Built with
            passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;