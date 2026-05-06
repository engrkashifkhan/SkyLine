import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, FileCheck, Building, Receipt, MapPin, Landmark } from 'lucide-react';

const certifications = [
  {
    title: "Commercial Registration",
    arabicTitle: "شهادة السجل التجاري",
    issuer: "Ministry of Commerce",
    number: "7051894918",
    date: "02/10/2025",
    status: "Active",
    icon: FileCheck,
  },
  {
    title: "SCA Membership",
    arabicTitle: "شهادة عضوية مقاول",
    issuer: "Saudi Contractors Authority",
    number: "868286824",
    date: "Oct 2, 2025",
    status: "Valid until Oct 2026",
    icon: Award,
  },
  {
    title: "Riyadh Chamber Membership",
    arabicTitle: "شهادة اشتراك",
    issuer: "Riyadh Chamber",
    number: "1206395",
    date: "02/10/2025",
    status: "Fifth Class",
    icon: Building,
  },
  {
    title: "VAT Registration",
    arabicTitle: "شهادة تسجيل ضريبة القيمة المضافة",
    issuer: "Zakat, Tax and Customs Authority",
    number: "314272538700003",
    date: "01/01/2026",
    status: "Quarterly",
    icon: Receipt,
  },
  {
    title: "National Address",
    arabicTitle: "إثبات عنوان",
    issuer: "Saudi Post",
    number: "RCWA3378",
    date: "2/10/2025",
    status: "Riyadh, Al Wizarat Dist.",
    icon: MapPin,
  },
  {
    title: "Bank Certifications",
    arabicTitle: "خطاب ايبان",
    issuer: "Al Rajhi Bank & SNB",
    number: "Verified IBAN",
    date: "2025",
    status: "Active Accounts",
    icon: Landmark,
  },
];

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="section-padding bg-white overflow-hidden">
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
            Fully licensed and certified to operate across the Kingdom of Saudi Arabia
          </p>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <cert.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {idx === 0 ? t('certifications.cr') :
                 idx === 1 ? t('certifications.saudization') :
                 idx === 2 ? t('certifications.chamber') :
                 idx === 3 ? t('certifications.tax') :
                 idx === 4 ? t('certifications.zakat') :
                 t('certifications.iban')}
              </h3>

              <div className="space-y-2 text-sm mt-4">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Issuer</span>
                  <span className="text-slate-700 font-semibold text-right max-w-[60%]">{cert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Number</span>
                  <span className="text-slate-700 font-mono text-xs font-semibold">{cert.number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Date</span>
                  <span className="text-slate-700 font-semibold">{cert.date}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-4 border-t border-slate-50">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
