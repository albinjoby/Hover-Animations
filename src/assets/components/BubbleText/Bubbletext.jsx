import React, { Children } from 'react'
import styles from "./Bubble.module.css"

const Bubbletext = () => {
  return (
    <section className="grid place-content-center bg-violet-300 h-screen">
      <div className="text-6xl font-thin text-center cursor-pointer">
        {"BubbbbbbleText".split("").map((letter, idx)=>(
            <span className={styles.hoverText} key={idx}>
                {letter}
            </span>
        ))}
      </div>
    </section>
  );
}

export default Bubbletext