import React from "react";
import { motion } from "framer-motion";

const lines = [
  {
    text: (
      <>
        Born from&nbsp;
        <span className='text-[#8b0000] [text-shadow:0_2px_12px_rgba(255,255,255,0.35)] font-extrabold'>
          passion
        </span>
      </>
    ),
    className: "text-xl md:text-2xl font-semibold text-white mt-8",
    direction: "left",
  },
  {
    text: (
      <>
        Destined to&nbsp;
        <span className='text-[#4b0082] [text-shadow:0_2px_12px_rgba(255,255,255,0.35)] font-extrabold'>
          lead
        </span>
      </>
    ),
    className: "text-xl md:text-2xl font-semibold text-white mt-8",
    direction: "right",
  },
  {
    text: (
      <>
        Aura that&nbsp;
        <span className='text-[#d4af37] [text-shadow:0_2px_12px_rgba(255,255,255,0.35)] font-extrabold'>
          owns
        </span>
        &nbsp;the room
      </>
    ),
    className: "text-xl md:text-2xl font-semibold text-white mt-8",
    direction: "left",
  },
  // {
  //   text: (
  //     <>
  //       <span className='[text-shadow:0_2px_12px_rgba(255,255,255,0.35)] font-extrabold'>
  //         Centerpiece
  //       </span>
  //       &nbsp;of every collection
  //     </>
  //   ),
  //   className: "text-xl md:text-2xl font-semibold text-white mt-8",
  //   direction: "right",
  // },
  {
    text: "Coming Soon!",
    className: "text-4xl md:text-6xl font-black text-white mt-8",
    direction: "down",
  },
];

const AnimatedHero = ({ as = "p", containerClass = "", once = true }) => {
  const MotionTag = motion[as] || motion.p;

  return (
    <div className={containerClass}>
      {lines.map((line, i) => (
        <MotionTag
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
          }}
          viewport={{
            once,
            amount: 1,
            margin: "-10px",
          }}
          className={line.className}
        >
          {line.text}
        </MotionTag>
      ))}
    </div>
  );
};

export default AnimatedHero;
