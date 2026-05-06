import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Hospital, School, Building, Factory, Radio } from 'lucide-react';
import { capabilities } from '../data/content';

const iconMap = {
  Hospital: Hospital,
  School: School,
  Building: Building,
  Factory: Factory,
  Radio: Radio,
};

const Capabilities = () => {
  const { t } = useTranslation();
  const translatedCapabilities = t('capabilities.items', { returnObjects: true });

  return (
    <section id="capabilities" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase"
          >
            {t('capabilities.sectionTitle')}
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary/20 mx-auto mt-6 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-accent animate-shimmer"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = iconMap[cap.icon];
            const translatedTitle = translatedCapabilities[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/40 text-center hover:bg-primary transition-all duration-500"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-white transition-colors">
                  {translatedTitle}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
