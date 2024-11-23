import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and collaborations.
          Feel free to reach out through any of the following channels:
        </p>
        
        <div className="flex justify-center space-x-8">
          <a 
            href="mailto:HadiIrshaid8722@gmail.com"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail size={32} className="mb-2" />
            <span>Email</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/hadi-irshaid-345386319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={32} className="mb-2" />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/Hadi87s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github size={32} className="mb-2" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}