import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery_1.png';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.png';
import aboutImg from '../assets/about_img.png';
import heroBg from '../assets/hero_bg.png';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: gallery1, alt: t('gallery.categories.telecom'), size: "md:col-span-2 md:row-span-2" },
    { src: gallery2, alt: t('resources.equipment'), size: "md:col-span-1 md:row-span-1" },
    { src: gallery3, alt: t('resources.vehicles'), size: "md:col-span-1 md:row-span-1" },
    { src: aboutImg, alt: t('gallery.categories.construction'), size: "md:col-span-1 md:row-span-1" },
    { src: heroBg, alt: t('navbar.home'), size: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase"
            >
              {t('gallery.sectionTitle')}
            </motion.h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              {t('gallery.description')}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-6 h-1 bg-accent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.size}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-white text-center p-4">
                  <p className="font-bold text-lg uppercase tracking-wider">{img.alt}</p>
                  <div className="w-10 h-1 bg-accent mx-auto mt-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
