import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function LanguageChanger() {
  const { translate } = useLanguage();
  

  return (
    <div>
      <p>{translate("changeLanguage")}: English</p>
    </div>
  );
}

export default LanguageChanger;
