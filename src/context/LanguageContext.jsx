import React, { createContext, useState, useContext, useEffect } from 'react';
import languagesData from '../data';
import axios from 'axios';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({ ...languagesData });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.post('https://reqres.in/api/workintech', languagesData[language]);
        setTranslations(response.data);
        if (!loading) {
          toast.success("Language changed.");
        }
      } catch (error) {
        console.error('Error fetching translations:', error);
        toast.error(error);
      } finally {
        setLoading(false);
        toast.success("Page loaded!");
      }
    };
    fetchTranslations();
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
