import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import all certification images
import cert1 from '../assets/certification imag1.jpg';
import cert2 from '../assets/certification image2.jpg';
import cert3 from '../assets/certification image3.jpg';
import cert4 from '../assets/certification image4.jpg';
import cert5 from '../assets/certification img5.jpg';
import cert6 from '../assets/certification img6.jpg';
import cert7 from '../assets/certification img7.jpg';
import cert8 from '../assets/certification img8.jpg';

const certificationsList = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8
];

const Certifications = () => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const isRTL = i18n.language === 'ar';

  return (
    <section id="certifications" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase"
          >
            {t('certifications.sectionTitle')}
          </motion.h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            {isRTL 
              ? "مرخصون ومعتمدون بالكامل للعمل في جميع أنحاء المملكة العربية السعودية"
              : "Fully licensed and certified to operate across the Kingdom of Saudi Arabia"}
          </p>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedImage(cert)}
            >
              <div className="aspect-[3/4] w-full bg-slate-100 flex items-center justify-center p-2">
                <img 
                  src={cert} 
                  alt={`Certification ${idx + 1}`} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-primary font-bold py-2.5 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  {isRTL ? "عرض الشهادة" : "View Certificate"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal for zooming */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden bg-transparent flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 md:top-0 md:right-0 z-10 bg-white hover:bg-slate-200 text-slate-900 p-2 md:p-3 rounded-full transition-colors shadow-lg"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X size={24} className="md:w-7 md:h-7" />
              </button>
              <img 
                src={selectedImage} 
                alt="Certification Full View" 
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
