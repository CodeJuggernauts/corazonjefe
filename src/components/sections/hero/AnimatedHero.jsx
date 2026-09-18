import { motion } from "framer-motion";

const lines = [
  {
    text: (
      <>
        Born from&nbsp;
        <span className='text-[#8b0000] [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000,0_0_6px_rgba(0,0,0,0.8)] font-extrabold'>
          passion
        </span>
      </>
    ),
    className: "text-xl md:text-2xl font-semibold text-white mt-8",
  },
  {
    text: (
      <>
        Destined to&nbsp;
        <span className='text-[#4b0082] [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000,0_0_6px_rgba(0,0,0,0.8)] font-extrabold'>
          lead
        </span>
      </>
    ),
    className: "text-xl md:text-2xl font-semibold text-white mt-8",
  },
  {
    text: (
      <>
        Aura that&nbsp;
        <span className='text-[#d4af37] [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000,0_0_6px_rgba(0,0,0,0.8)] font-extrabold'>
          owns
        </span>
        &nbsp;the room
      </>
    ),
    className: "text-xl md:text-2xl font-semibold text-white mt-8",
  },
  {
    text: "Corazon Jefe - Coming Soon!",
    className: "text-4xl md:text-6xl font-black text-white mt-8 mb-24",
  },
];

const AnimatedHero = ({ as = "p" }) => {
  const MotionTag = motion[as] || motion.p;

  return (
    <div>
      {lines.map((line, i) => (
        <MotionTag
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: i * 0.25,
          }}
          viewport={{
            amount: 0.25,
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
