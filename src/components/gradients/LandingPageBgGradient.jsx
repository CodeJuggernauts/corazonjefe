import backgroundImage from "../../assets/CorazonJefe.png";

const LandingPageBgGradient = () => (
  <div className='fixed inset-0 -z-10 flex items-center justify-center'>
    <div className='absolute inset-0 bg-gradient-to-br from-black via-[#4b0082]/70 to-[#3b0a0a]/80'></div>

    <div>
      <img
        src={backgroundImage}
        alt='Corazon Jefe'
        className='max-h-[75vh] max-w-[75vw] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]'
      />
    </div>
  </div>
);

export default LandingPageBgGradient;
