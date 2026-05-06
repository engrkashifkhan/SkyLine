import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { navigation, companyInfo } from '../data/content';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <span className={cn("font-bold text-2xl tracking-tighter leading-none", scrolled ? "text-primary" : "text-white")}>
                SKY LINE
              </span>
              <span className={cn("text-xs font-medium self-end", scrolled ? "text-primary-light" : "text-white/80")}>
                سكاي لاين
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  scrolled ? 'text-slate-700' : 'text-white'
                )}
              >
                {t(`navbar.${item.name.toLowerCase()}`)}
              </a>
            ))}
            <div className="flex items-center gap-4">
              {/* <a
                href={`tel:${companyInfo.phone}`}
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <Phone size={16} />
                {t('navbar.contact')}
              </a> */}
              <button
                onClick={toggleLanguage}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors font-medium text-sm",
                  scrolled
                    ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                    : "border-white/30 text-white hover:bg-white/10"
                )}
              >
                <Globe size={16} />
                {i18n.language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ',
          isOpen ? 'max-h-screen opacity-100 border-t' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 sm:px-3 bg-white">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t(`navbar.${item.name.toLowerCase()}`)}
            </a>
          ))}
          <div className="pt-4 border-t flex flex-col gap-3">
            {/* <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 px-3 py-2 text-slate-600">
              <Phone size={18} className="text-primary" />
              <span dir="ltr">{companyInfo.phone}</span>
            </a> */}
            {/* <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 px-3 py-2 text-slate-600">
              <Mail size={18} className="text-primary" />
              <span>{companyInfo.email}</span>
            </a> */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 mb-12  mt-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
            >
              <Globe size={18} />
              {i18n.language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;