import React, { createContext, useState, useContext, useEffect } from 'react';
import languagesData from '../data';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({ ...languagesData });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTranslations(languagesData[language]);
    if (!loading) {
      toast.success("Language changed.");
    }
    setLoading(false);
    toast.success("Page loaded!");
  }, [language]);

  if (loading) {
    return <h1 className='text-sky-800 font-semibold flex text-center justify-self-center place-self-center'>LOADING.....</h1>;
  }

  const translate = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
