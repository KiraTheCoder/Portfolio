import { Code, Database, Cloud, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Next.js, and modern JavaScript.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications with Node.js, Express, and database management.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deploying scalable applications on AWS with containerization and CI/CD pipelines.',
  },
  {
    icon: Rocket,
    title: 'Performance & Security',
    description: 'Implementing RBAC, 2FA authentication, and optimizing applications for peak performance.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Web Developer with expertise in modern web technologies. 
            I love crafting elegant solutions to complex problems and building applications 
            that provide exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card group hover:glow transition-all duration-300"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I've worked on 
              diverse projects ranging from enterprise platforms to real-time applications. 
              My experience spans across various industries, helping businesses transform their 
              digital presence and streamline their operations through innovative technology solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};