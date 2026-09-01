import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import SocialSection from "../socials/SocialSection";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const { signup } = useSignup();

  return (
    <section className='px-6 py-20 backdrop-blur-sm bg-[#3b0a0a]/40 border-t border-[#3b0a0a]/40'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-2xl font-semibold mb-4 text-[#d4af37]'>
          Stay Connected
        </h2>

        <p className='text-gray-200 mb-8'>
          Be the first to access exclusive releases, early discounts, and
          private drops.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            signup(email);
            alert("Email captured (connect backend later)");
          }}
          className='flex flex-col sm:flex-row gap-4'
        >
          <input
            id='emailCollection'
            type='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(event) => {
              console.log("i got here");
              setEmail(event.target.value);
            }}
            className='flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]'
          />

          <button
            type='submit'
            className='px-6 py-3 rounded-xl bg-[#d4af37] text-black font-semibold hover:opacity-90 transition shadow-lg shadow-[#d4af37]/20'
          >
            Join
          </button>
        </form>
      </div>

      <SocialSection />
    </section>
  );
};

export default SignupSection;
