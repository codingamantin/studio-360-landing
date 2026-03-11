import { motion } from "framer-motion";
import { Compass, LayoutGrid, Hammer, Box, Armchair, ClipboardCheck } from "lucide-react";

const services = [
  { icon: Compass, title: "Interior Design", desc: "Complete design concepts tailored to your lifestyle, from initial mood boards to final styling." },
  { icon: LayoutGrid, title: "Space Planning", desc: "Optimized layouts that maximize flow, function, and the feeling of spaciousness." },
  { icon: Hammer, title: "Renovation Design", desc: "Transformative renovation projects guided by precision planning and creative vision." },
  { icon: Box, title: "3D Visualization", desc: "Photorealistic renderings that bring your future space to life before construction begins." },
  { icon: Armchair, title: "Furniture & Material Sourcing", desc: "Curated selections of furnishings, finishes, and materials from trusted artisans." },
  { icon: ClipboardCheck, title: "Turnkey Project Management", desc: "End-to-end project coordination, so you can enjoy the process and the result." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-cacao py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-taupe/20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cacao p-10 group hover:bg-leather transition-colors duration-500"
            >
              <service.icon className="w-8 h-8 text-taupe mb-6 group-hover:text-khaki transition-colors duration-500" strokeWidth={1} />
              <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-taupe font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
