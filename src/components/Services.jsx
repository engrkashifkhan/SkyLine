import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Wifi, Users, ChevronRight } from 'lucide-react';
import { services } from '../data/content';

const iconMap = {
  Building2: Building2,
  Wifi: Wifi,
  Users: Users,
};

const Services = () => {
  const { t } = useTranslation();
  const translatedServices = t('services.list', { returnObjects: true });

  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase"
          >
            {t('services.sectionTitle')}
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const translatedService = translatedServices[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:border-primary/20 transition-all hover:-translate-y-2"
              >
                {/* Header */}
                <div className="bg-primary p-6 flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-xl font-bold leading-tight">{translatedService.title}</h3>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {translatedService.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <ChevronRight size={16} className="text-primary" />
                          <span className="text-slate-700 font-semibold">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* <motion.button 
                    whileHover={{ x: 5 }}
                    className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:text-primary-dark transition-colors"
                  >
                    View Details
                    <ChevronRight size={18} />
                  </motion.button> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
