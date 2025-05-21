// eslint-disable-next-line no-unused-vars
import { motion, removeItem } from "framer-motion";

function Letterflip() {
  return (
    <section className="grid place-content-center bg-green-300 h-screen">
      <FlipLink link="https://twitter.com">TWITTER</FlipLink>
      <FlipLink link="https://facebook.com">FACEBOOK</FlipLink>
      <FlipLink link="https://instagram.com">INSTAGRAM</FlipLink>
      <FlipLink link="https://linkedin.com">LINKED IN</FlipLink>
    </section>
  );
}

const FlipLink = ({ children, link }) => {

    const DURATION = 0.25
    const STAGGER = 0.025

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="text-center relative block overflow-hidden whitespace-nowrap font-black text-6xl"
      href={link}
      style={{
        lineHeight: 0.85
      }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i
              }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              key={i}
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i
              }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default Letterflip;
