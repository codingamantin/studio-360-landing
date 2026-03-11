import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { img: project1, title: "Marble & Walnut Kitchen", category: "Residential", desc: "A culinary space defined by natural marble and warm walnut cabinetry." },
  { img: project2, title: "Serene Master Suite", category: "Residential", desc: "Soft textures and muted tones create a sanctuary for rest." },
  { img: project3, title: "Executive Study", category: "Commercial", desc: "A private office where sophistication meets productivity." },
  { img: project4, title: "Stone Spa Bathroom", category: "Residential", desc: "Raw stone meets modern comfort in this spa-inspired retreat." },
  { img: project5, title: "Ember Restaurant", category: "Commercial", desc: "Curved forms and warm timber set the tone for intimate dining." },
  { img: project6, title: "Skyline Penthouse", category: "Residential", desc: "Panoramic views framed by understated luxury." },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-leather py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-taupe mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-taupe mb-2">{project.category}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{project.title}</h3>
              <p className="font-body text-sm text-taupe font-light">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
