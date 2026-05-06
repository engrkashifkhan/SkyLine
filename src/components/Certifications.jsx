import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileCheck, Maximize2 } from 'lucide-react';

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
  { image: cert1, key: 'cr', fallbackEn: 'Commercial Registration', fallbackAr: 'شهادة السجل التجاري' },
  { image: cert2, key: 'saudization', fallbackEn: 'Saudization Certificate', fallbackAr: 'شهادة السعودة' },
  { image: cert3, key: 'chamber', fallbackEn: 'Chamber of Commerce', fallbackAr: 'شهادة الغرفة التجارية' },
  { image: cert4, key: 'tax', fallbackEn: 'VAT Registration', fallbackAr: 'تسجيل ضريبة القيمة المضافة' },
  { image: cert5, key: 'zakat', fallbackEn: 'Zakat Certificate', fallbackAr: 'شهادة الزكاة' },
  { image: cert6, key: 'gosi', fallbackEn: 'GOSI Registration', fallbackAr: 'شهادة التأمينات الاجتماعية' },
  { image: cert7, key: 'iban', fallbackEn: 'Bank Certifications', fallbackAr: 'شهادة بنكية' },
  { image: cert8, key: 'nationalAddress', fallbackEn: 'National Address', fallbackAr: 'العنوان الوطني' }
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
          {certificationsList.map((cert, idx) => {
            const certTitle = t(`certifications.${cert.key}`, { defaultValue: isRTL ? cert.fallbackAr : cert.fallbackEn });

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(cert.image)}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full bg-slate-50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                  <img 
                    src={cert.image} 
                    alt={certTitle} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-primary text-white text-sm font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                      <Maximize2 size={16} />
                      {isRTL ? "عرض الشهادة" : "View"}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex items-center justify-between gap-3 bg-white">
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-[17px] font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {certTitle}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
                      {isRTL ? "وثيقة معتمدة" : "Verified Document"}
                    </span>
                  </div>
                  
                  {/* Icon matching theme */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0 shadow-sm">
                    <FileCheck size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Modal for zooming */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 p-4 md:p-8 backdrop-blur-sm"
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
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
