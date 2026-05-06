import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about_img.png';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8 order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
              {t('about.title')}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {t('about.heading')}
              </h2>

              <p 
                className={`text-xl leading-relaxed text-slate-700 font-medium border-primary ${i18n.language === 'en' ? 'italic border-l-4 pl-6' : 'border-r-4 pr-6 font-bold'}`}
              >
                {t('about.description')}
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-black text-primary">2024</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Founded</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">KSA</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Headquarters</div>
              </div>
            </div> */}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Sky Line Construction Site"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/5 rounded-full -z-0"></div>

            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-16 h-1 bg-primary mb-2"></div>
              <div className="w-8 h-1 bg-accent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
