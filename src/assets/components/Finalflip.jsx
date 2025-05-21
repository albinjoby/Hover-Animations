// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

function Finalflip() {
  return (
    <section className="grid place-content-center bg-red-300 h-screen">
      <div className="flex flex-col">
        <FlipLink link="https://twitter.com">TWITTER</FlipLink>
        <FlipLink link="https://facebook.com">FACEBOOK</FlipLink>
        <FlipLink link="https://instagram.com">INSTAGRAM</FlipLink>
        <FlipLink link="https://linkedin.com">LINKEDIN</FlipLink>
      </div>
    </section>
  );
}

const FlipLink = ({ children, link }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={link}
      className="text-6xl font-black text-center overflow-hidden whitespace-nowrap relative block"
      style={{
        lineHeight: 1.1,
      }}
    >
      <div className="flex items-center justify-center">
        <motion.div
          variants={{
            initial: { x: 0 },
            hovered: { x: -5 },
          }}
          transition={{ duration: 0.3 }}
        >
          [
        </motion.div>

        <div className="relative overflow-hidden px-2 h-16">
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            {children}
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 right-0 block"
            style={{ color: "#000" }}
          >
            {children}
          </motion.div>
        </div>

        <motion.div
          variants={{
            initial: { x: 0 },
            hovered: { x: 5 },
          }}
          transition={{ duration: 0.3 }}
        >
          ]
        </motion.div>
      </div>
    </motion.a>
  );
};

export default Finalflip;
