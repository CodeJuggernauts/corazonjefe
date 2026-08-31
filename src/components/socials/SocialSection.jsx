import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaPinterestP } from "react-icons/fa";

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/corazonjefe",
  },
  {
    icon: FaTiktok,
    href: "https://tiktok.com/@corazonjefe",
  },
  {
    icon: FaPinterestP,
    href: "https://pinterest.com/corazonjefe",
  },
];

const SocialSection = () => {
  const MotionTag = motion;

  return (
    <div className='py-12 text-center'>
      <p className='uppercase tracking-[0.2em] text-xs text-gray-400 mb-6'>
        Find your Aura
      </p>

      <div className='flex justify-center gap-8'>
        {socials.map(({ icon: Icon, href }, i) => (
          <MotionTag.a
            key={i}
            href={href}
            target='_blank'
            rel='noreferrer'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -4,
              scale: 1.06,
            }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
            }}
            className={`text-gray-300 transition duration-500 hover:text-[#d4af37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]`}
          >
            <Icon size={30} />
          </MotionTag.a>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
