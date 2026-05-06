import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, GraduationCap, HardHat, AlertTriangle } from 'lucide-react';
import { safetyPolicies } from '../data/content';

const iconMap = {
  ShieldCheck: ShieldCheck,
  FileText: FileText,
  GraduationCap: GraduationCap,
  HardHat: HardHat,
  AlertTriangle: AlertTriangle,
};

const Safety = () => {
  const { t } = useTranslation();
  const translatedPolicies = t('safety.policies', { returnObjects: true });

  return (
    <section id="safety" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Header Area */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-20 h-2 bg-accent rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase">
                {t('safety.sectionTitle')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('safety.description')}
              </p>
              <div className="pt-8 hidden lg:block">
                <div className="p-8 bg-primary rounded-3xl text-white shadow-2xl shadow-primary/30">
                  <ShieldCheck size={48} className="mb-4 text-accent" />
                  <p className="font-bold text-xl uppercase tracking-wider">{t('safety.subtitle')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Policies List */}
          <div className="lg:w-2/3 space-y-6">
            {safetyPolicies.map((policy, idx) => {
              const Icon = iconMap[policy.icon];
              const translatedPolicy = translatedPolicies[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-200/50 flex items-center gap-6 md:gap-8 border border-slate-100 hover:border-primary/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={32} />
                  </div>
                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-slate-800">{translatedPolicy}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
