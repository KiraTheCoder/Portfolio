import { Heart, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="text-2xl font-bold text-gradient cursor-pointer hover:scale-105 transition-transform duration-300 mb-6"
          >
            Kiran Kumar
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-muted-foreground mb-8"
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using</span>
            <Code className="h-4 w-4 text-primary" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-amber-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            <p>© {currentYear} Kiran Kumar. All rights reserved.</p>
            <p className="mt-2">
              Full Stack Web Developer • Building the future, one line of code at a time
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};