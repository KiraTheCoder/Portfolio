import { motion } from 'framer-motion';
import { 
  Hexagon,
  Server, 
  Globe, 
  Database, 
  Cloud, 
  Github, 
  Radio, 
  Shield, 
  Flame, 
  Workflow,
  Code,
  Zap,
  HardDrive
} from 'lucide-react';

const skills = [
  { name: 'Node.js', category: 'Backend', color: 'from-slate-600 to-slate-800', icon: Hexagon },
  { name: 'Express', category: 'Backend', color: 'from-gray-600 to-gray-800', icon: Zap },
  { name: 'React', category: 'Frontend', color: 'from-blue-600 to-blue-800', icon: Code },
  { name: 'Next.js', category: 'Frontend', color: 'from-neutral-700 to-neutral-900', icon: Globe },
  { name: 'MongoDB', category: 'Database', color: 'from-emerald-600 to-emerald-800', icon: HardDrive },
  { name: 'PostgreSQL', category: 'Database', color: 'from-indigo-600 to-indigo-800', icon: Database },
  { name: 'TypeScript', category: 'Frontend', color: 'from-blue-500 to-blue-700', icon: Code },
  { name: 'AWS', category: 'Cloud', color: 'from-amber-600 to-amber-800', icon: Cloud },
  { name: 'GitHub', category: 'Tools', color: 'from-stone-600 to-stone-800', icon: Github },
  { name: 'Socket.IO', category: 'Real-time', color: 'from-slate-700 to-slate-900', icon: Radio },
  { name: 'Supabase', category: 'Backend', color: 'from-teal-600 to-teal-800', icon: Shield },
  { name: 'Firebase', category: 'Backend', color: 'from-orange-600 to-orange-800', icon: Flame },
  { name: 'n8n', category: 'Automation', color: 'from-violet-600 to-violet-800', icon: Workflow },
  { name: 'REST APIs', category: 'Backend', color: 'from-cyan-600 to-cyan-800', icon: Globe },
  { name: 'OAuth', category: 'Authentication', color: 'from-purple-600 to-purple-800', icon: Shield },
  { name: 'Linux', category: 'Tools', color: 'from-yellow-600 to-yellow-800', icon: Server },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools', 'Real-time', 'Automation', 'Authentication'];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I work with a diverse set of technologies to build comprehensive solutions 
            that meet modern development standards.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative skill-card-3d"
                >
                  <div className="skill-card-inner">
                    <div className="glass-card text-center hover:glow transition-all duration-500 p-3 md:p-6 animate-skill-float bg-gradient-to-br from-card/95 to-secondary/30 border border-border/50 hover:border-primary/30">
                      <div className="skill-icon-3d w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/70 to-accent/70 flex items-center justify-center text-white shadow-lg">
                        <IconComponent size={window.innerWidth < 768 ? 20 : 28} strokeWidth={2} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{skill.name}</h3>
                      <span className="text-xs text-muted-foreground bg-muted/60 px-1 md:px-2 py-0.5 md:py-1 rounded-full hidden sm:inline-block">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends and best practices. I regularly explore new frameworks, tools, and 
                methodologies to enhance my development capabilities and deliver cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};