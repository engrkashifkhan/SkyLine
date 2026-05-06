import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { companyInfo, heroContent } from '../data/content';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Riyadh Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Side: Blue Box — matches PDF design (solid primary bg) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary p-8 mt-62 md:mt-4 lg:mt-2 md:p-12 lg:p-14 text-white max-w-md lg:max-w-lg md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 shadow-2xl"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-blue-200">
                {t('hero.year')}
              </p>
            </div>

            <div className="pt-6 space-y-4 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2.5 rounded-full">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="text-base md:text-lg font-medium tracking-wide">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2.5 rounded-full">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-base md:text-lg font-medium tracking-wide lowercase">{companyInfo.email}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Vision 2030 */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block absolute top-20 right-12 text-white"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold tracking-[0.2em]">{t('hero.vision')}</span>
            <div className="flex items-center gap-2 mt-[-10px]">
              <span className="text-6xl font-black text-white">2</span>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="text-6xl font-black text-white">30</span>
            </div>
            <span className="text-xs font-bold tracking-widest mt-1 opacity-80 uppercase">Kingdom of Saudi Arabia</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;