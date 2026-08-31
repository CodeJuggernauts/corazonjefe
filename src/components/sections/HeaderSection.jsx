import AnimatedHero from "./hero/AnimatedHero";

const HeaderSection = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center px-6 py-32'>
      <div className='mb-6'>
        <img
          src='/src/assets/CorazonJefe.png'
          alt='Corazon Jefe'
          className='max-h-[75vh] max-w-[75vw] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]'
        />
      </div>
      <div className='max-w-xl text-center flex flex-col items-center gap-12 py-20'>
        <AnimatedHero />
      </div>
    </section>
  );
};

export default HeaderSection;
