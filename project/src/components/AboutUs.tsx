import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-[#CDB4DB] mb-4 font-playfair">Maternify</h1>
        <p className="text-2xl text-[#FFAFCC] mb-12">Predict. Protect. Nurture.</p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-gray-600 bg-white/80 p-8 rounded-lg shadow-sm"
        >
          <p className="text-lg leading-relaxed">
            Welcome to Maternify, your trusted companion in the journey of motherhood. Our platform 
            combines cutting-edge technology with medical expertise to provide accurate predictions 
            about pregnancy risks and fetal health. Using advanced machine learning algorithms and 
            comprehensive medical data, we aim to empower healthcare providers and expectant mothers 
            with valuable insights for informed decision-making.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our dual-prediction system focuses on early detection and prevention, analyzing various 
            health parameters to assess potential risks during pregnancy and monitor fetal wellbeing. 
            This proactive approach enables timely interventions and personalized care strategies, 
            ultimately contributing to better maternal and child health outcomes.
          </p>
        </motion.div>
      </motion.div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#BDE0FE] to-[#A2D2FF] rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Understanding Pregnancy Risk</h2>
          <div className="bg-white/90 rounded-lg p-4 h-64 overflow-y-auto">
            <p className="text-gray-600">
            Our pregnancy risk assessment model utilizes advanced machine learning algorithms to analyze various maternal health indicators and predict potential complications. By considering multiple factors such as medical history, current health status, and lifestyle factors, we provide comprehensive risk assessments to help healthcare providers make informed decisions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#FFC8DD] to-[#FFAFCC] rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">The Science of Fetal Health Prediction</h2>
          <div className="bg-white/90 rounded-lg p-4 h-64 overflow-y-auto">
            <p className="text-gray-600">
            Fetal health prediction involves sophisticated analysis of cardiotocography (CTG) data and other vital measurements. Our model processes these parameters through carefully trained neural networks to identify patterns and anomalies that might indicate potential health concerns, enabling early intervention when necessary.
Pregnancy is a beautiful journey, and we’re here to help you navigate it safely. By looking at simple things like age, blood sugar, and blood pressure, we can help spot any potential risks and give you the guidance you need for a healthy and happy pregnancy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;