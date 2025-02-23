import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Baby, LineChart, MessageSquare, Info } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import PregnancyRisk from './components/PregnancyRisk';
import FetalHealth from './components/FetalHealth';
import Dashboard from './components/Dashboard';
import ChatAssistant from './components/ChatAssistant';
import UploadFile from './components/UploadFile';

function App() {
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutUs />;
      case 'pregnancy':
        return <PregnancyRisk />;
      case 'fetal':
        return <FetalHealth />;
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <ChatAssistant />;
      case 'report':
        return <UploadFile/>;
      default:
        return <AboutUs />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;