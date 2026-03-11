import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-leather overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxurious modern interior living room with natural materials"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leather via-leather/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-6">
            Interior Design Studio
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8">
            Timeless interiors
            <br />
            <span className="italic text-khaki">shaped</span> for
            <br />
            modern living
          </h1>
          <p className="font-body text-base md:text-lg text-taupe max-w-md mb-12 font-light leading-relaxed">
            We craft residential and commercial spaces that balance beauty, function, and the quiet power of thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-taupe text-leather hover:bg-khaki transition-colors duration-300 text-center"
            >
              Book a Consultation
            </a>
            <a
              href="#projects"
              className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 border border-taupe/40 text-foreground hover:bg-taupe/10 transition-colors duration-300 text-center"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
