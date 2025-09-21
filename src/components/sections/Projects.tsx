import { ExternalLink, Github, Server, Shield, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MadrasaPlatform',
    description: 'Developed a scalable multilingual e-learning platform using Express and MongoDB. Created secure dashboards for admins, teachers, and students with content and progress management tools.',
    technologies: ['Express', 'MongoDB', 'AWS EC2', 'S3', 'CloudFront', 'Route 53', 'RBAC', '2FA'],
    icon: Shield,
    color: 'from-blue-500 to-indigo-600',
    features: ['Multilingual Support', 'Role-based Dashboards', '30% Load Time Reduction', 'AWS Deployment'],
    duration: 'Mar 2024 - May 2024',
    siteLink: "https://madrasaplatform.com/",
    gitHubLink: "/"
  },
  {
    title: 'Pods',
    description: 'Worked on React and Next.js frontend for PODS, a leading moving and storage company. Handled API integrations and efficient data fetching using React Query.',
    technologies: ['React', 'Next.js', 'React Query', 'TypeScript', 'API Integration'],
    icon: Zap,
    color: 'from-green-500 to-emerald-600',
    features: ['Complex UI Logic', 'Server/Client Rendering', 'SEO-Friendly Components', 'Responsive Design'],
    duration: 'Aug 2024 - June 2025',
    siteLink: "http://pods.com/",
    gitHubLink: "/"
  },
  {
    title: 'ShopEase',
    description: 'Built a full-featured eCommerce website with product listing, search, filter, cart management, order placement, and user authentication using MERN stack.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Payment Gateway', 'MERN'],
    icon: Server,
    color: 'from-purple-500 to-violet-600',
    features: ['Product Management', 'Search & Filter', 'Payment Integration', 'User Authentication'],
    duration: 'June 2024 - Aug 2024',
    siteLink: "/",
    gitHubLink: "https://github.com/KiraTheCoder/ShopEaseAPI"
  },
  {
    title: 'Chat Web App',
    description: 'Built a real-time chat app using Socket.IO with group and one-to-one chat features. Enforced phone-based login for user authentication.',
    technologies: ['Express', 'TypeScript', 'MongoDB', 'React', 'Socket.IO'],
    icon: MessageCircle,
    color: 'from-orange-500 to-red-600',
    features: ['Real-time Messaging', 'Group Chat', 'One-to-One Chat', 'Phone Authentication'],
    duration: 'Feb 2024 - Mar 2024',
    siteLink: "/",
    gitHubLink: "https://github.com/KiraTheCoder/kiraChatAPP"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in full-stack development
            and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="glass-card hover:glow transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a href={project.gitHubLink} target='_blank' className='flex-1' >

                    <Button
                      variant="outline"
                      size="sm"
                      className="glass hover:glow w-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>

                  <a href={project.siteLink} target='_blank' className='flex-1' >
                    <Button
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white w-full"
                      size="sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass hover:glow px-8 py-3 rounded-full font-semibold"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};