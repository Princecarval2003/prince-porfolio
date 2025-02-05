import './App.css';
import './global.css';
import React from "react";
import ModeComponent from './components/ModeComponent';
import { LanguageProvider } from './context/LanguageContext';
import languagesData from './data';
import axios from 'axios';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
