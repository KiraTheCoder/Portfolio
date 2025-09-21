import { Building, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Freelancer',
    position: 'Freelancer Web Developer',
    duration: 'Aug 2024 - Present',
    location: 'Remote',
    description: [
      'Built scalable backends with Express, TypeScript, MongoDB, and secure REST APIs with JWT',
      'Designed and developed frontends with React, Tailwind CSS, and Bootstrap, ensuring responsive UI/UX',
    ],
    technologies: ['Express', 'TypeScript', 'MongoDB', 'React', 'Tailwind CSS', 'Bootstrap', 'JWT', 'REST APIs'],
  },
  {
    company: 'Hybrid Utopia',
    position: 'Full Stack Web Developer',
    duration: 'Dec 2023 - July 2024',
    location: 'Faridabad, India',
    description: [
      'Backend development using Express, TypeScript, and MongoDB',
      'Built REST APIs with JWT authentication and optimized MongoDB data models',
      'Developed real-time chat functionality using Socket.IO',
      'Contributed to major projects like a Pods system and a fundraising app',
      'Built responsive UIs using React, Tailwind CSS, HTML, CSS, and Bootstrap',
      'Worked with AWS EC2 and S3 for hosting, storage, and deployment',
      'Ensured smooth full-stack integration and collaborated on API development',
    ],
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'React', 'Socket.IO', 'AWS', 'JWT'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in full-stack development, working with 
            innovative companies to build scalable solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg"></div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card group hover:glow transition-all duration-300"
                  >
                    <div className="mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                          {exp.position}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-muted-foreground space-y-1 sm:space-y-0">
                          <div className="flex items-center space-x-1">
                            <Building className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="font-medium text-sm md:text-base">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="text-sm md:text-base">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="text-sm md:text-base">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start text-sm md:text-base">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-0.5 md:py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};