import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { companyInfo, navigation } from '../data/content';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Contact Info Area */}
      <div className="bg-primary text-white section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                  {t('contact.getInTouch')}
                </h2>
                <p className="mt-4 text-blue-200 text-lg leading-relaxed max-w-md">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-200 uppercase tracking-wider">{t('contact.phoneLabel')}</p>
                    <a href={`tel:${companyInfo.phone}`} dir="ltr" className="text-xl font-bold hover:text-accent transition-colors block text-left">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-200 uppercase tracking-wider">{t('contact.emailLabel')}</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-xl font-bold hover:text-accent transition-colors lowercase">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-200 uppercase tracking-wider">{t('contact.officeLabel')}</p>
                    <p className="text-xl font-bold">{t('contact.officeLocation')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-200 uppercase tracking-wider">{t('contact.businessHours')}</p>
                    <p className="text-xl font-bold" dir="ltr">{t('contact.hours')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8">{t('contact.form.title')}</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-bold text-blue-200 mb-2 block">{t('contact.form.fullName')}</label>
                    <input
                      type="text"
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-blue-200 mb-2 block">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-blue-200 mb-2 block">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors text-left"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-blue-200 mb-2 block">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-blue-200 mb-2 block">{t('contact.form.message')}</label>
                  <textarea
                    rows="4"
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-amber-400 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98]"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-3xl tracking-tighter">SKY LINE</span>
              <span className="text-sm text-primary-light font-bold">سكاي لاين</span>
              <p className="text-slate-400 text-sm mt-2 max-w-xs text-center md:text-left">
                {t('contact.footer.tagline')}
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {navigation.slice(0, 6).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {t(`navbar.${item.name.toLowerCase()}`)}
                </a>
              ))}
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary/20 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>{t('contact.footer.copyright')}</p>
            <p className="font-bold text-primary-light/50">{t('contact.footer.country')}</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
