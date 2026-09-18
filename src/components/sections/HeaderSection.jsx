import AnimatedHero from "./hero/AnimatedHero";

const HeaderSection = () => {
  return (
    <section className='min-h-[125vh] flex flex-col items-center justify-end text-center px-6'>
      <div className='max-w-xl text-center flex flex-col items-center gap-12'>
        <AnimatedHero />
      </div>
    </section>
  );
};

export default HeaderSection;
