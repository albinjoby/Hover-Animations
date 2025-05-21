// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Wordflip() {
  return (
    <section className="grid place-content-center bg-blue-300 h-screen">
      <FlipLink link="https://twitter.com">TWITTER</FlipLink>
      <FlipLink link="https://facebook.com">FACEBOOK</FlipLink>
      <FlipLink link="https://instagram.com">INSTAGRAM</FlipLink>
      <FlipLink link="https://linkedin.com">LINKED IN</FlipLink>
    </section>
  );
}

const FlipLink = ({ children, link }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="text-center relative block overflow-hidden whitespace-nowrap font-black text-6xl"
      href={link}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default Wordflip;
