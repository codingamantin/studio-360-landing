import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-pearl py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden">
              <img
                src={aboutImg}
                alt="Studio 360 design team at work"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cacao mb-8">
              Design with
              <br />
              <span className="italic">intention</span>
            </h2>
            <div className="space-y-5 font-body text-base text-cacao/80 font-light leading-relaxed">
              <p>
                Studio 360 is a boutique interior design practice founded on the belief that great spaces are shaped by listening — to materials, to light, and most importantly, to the people who inhabit them.
              </p>
              <p>
                Our approach balances timeless aesthetics with modern sensibility. We work across residential and commercial projects, bringing the same level of care and craft to a private home as we do to a signature restaurant.
              </p>
              <p>
                Every project begins with a conversation and ends with a space that feels unmistakably yours.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-khaki pt-10">
              <div>
                <p className="font-display text-3xl text-cacao">150+</p>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mt-1">Projects</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cacao">12</p>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cacao">8</p>
                <p className="font-body text-xs tracking-widest uppercase text-taupe mt-1">Designers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
