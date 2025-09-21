import { ArrowDown, Download, Mail, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import KiranResume from '@/assets/Kiran-Kumar.pdf';
import { Scene3D } from '@/components/3d/Scene3D';

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.2),transparent_50%)]" />
      </div>

      {/* 3D Scene */}
      <Scene3D />

      {/* Modern floating elements with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-24 h-24 rounded-full blur-xl"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.3))`,
            boxShadow: `0 0 60px hsl(var(--primary) / 0.3)`
          }}
        />

        {/* Secondary accent orb */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-[15%] w-32 h-32 rounded-full blur-xl"
          style={{
            background: `linear-gradient(135deg, hsl(var(--accent) / 0.4), hsl(var(--primary) / 0.2))`,
            boxShadow: `0 0 80px hsl(var(--accent) / 0.3)`
          }}
        />

        {/* Tertiary micro elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-[25%] w-4 h-4 bg-primary/60 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-[20%] w-6 h-6 bg-accent/50 rounded-full blur-sm"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-14">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-gradient block text-glow">Kiran Kumar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Full Stack Web Developer
              </h2>
              <Code2 className="w-6 h-6 text-accent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Crafting exceptional digital experiences with{' '}
              <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg">Node.js</span>,{' '}
              <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg">React</span>, and{' '}
              <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg">AWS</span>.
              <br className="hidden sm:block mt-2" />
              <span className="block sm:inline mt-4 sm:mt-0">
                Passionate about building scalable solutions that drive innovation.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="modern-button group text-white px-10 py-4 text-lg font-bold"
            >
              <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Let's Connect
            </Button>
            <a href={KiranResume} download="Kiran-Kumar-Resume.pdf">
              <Button
                variant="outline"
                size="lg"
                className="glass hover:glow px-10 py-4 text-lg font-semibold border-2 border-primary/30 hover:border-primary transition-all duration-300 rounded-2xl"
              >
                <Download className="mr-3 h-6 w-6" />
                View Resume
              </Button>
            </a>
          </motion.div>

          {/* Modern scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm text-muted-foreground font-medium">Scroll to explore</p>
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                />
              </div>
              <ArrowDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};