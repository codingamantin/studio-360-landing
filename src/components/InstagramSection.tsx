import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

const InstagramSection = () => {
  return (
    <section className="bg-pearl py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Instagram className="w-6 h-6 text-taupe mx-auto mb-4" strokeWidth={1.5} />
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">@studio360</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cacao">Follow Our Work</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Studio 360 interior design inspiration ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
