import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HardHat, Truck, Wrench } from 'lucide-react';
import { equipmentResources } from '../data/content';

const Resources = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('resources.equipment'),
      items: t('resources.equipmentList', { returnObjects: true }),
      icon: Wrench,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: t('resources.vehicles'),
      items: t('resources.vehiclesList', { returnObjects: true }),
      icon: Truck,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: t('resources.manpower'),
      items: t('resources.manpowerList', { returnObjects: true }),
      icon: HardHat,
      color: "bg-primary/5 text-primary"
    }
  ];

  return (
    <section id="resources" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase"
          >
            {t('resources.sectionTitle')}
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${section.color} transition-transform group-hover:rotate-6`}>
                  <section.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">{section.title}</h3>
              </div>

              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Vision 2030 watermark style */}
        {/* <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center opacity-40">
          <div className="text-4xl font-black italic">MANPOWER</div>
          <div className="text-right">
             <div className="text-xl font-bold">SKY LINE</div>
             <div className="text-xs tracking-widest font-bold">ESTABLISHED 2024</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Resources;
