import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import axios from 'axios';

const riskLevels = {
  prolongued_decelerations: { normal: 60, message: "Risk: >60 seconds → Indicates hypoxia or severe fetal distress" },
  severe_decelerations: { normal: 15, message: "Risk: >15 bpm for more than 2 minutes → Strong indicator of fetal distress" },
  abnormal_short_term_variability: { normal: 5, message: "Risk: <5 ms → Suggests hypoxia, fetal compromise, or neurological issues" },
  mean_value_of_short_term_variability: { normal: 5, message: "Risk: <5 ms → Low variability indicates fetal compromise" },
  mean_value_of_long_term_variability: { normal: 10, message: "Risk: <10 ms → Suggests reduced fetal adaptability and distress" },
  uterine_contractions: { normal: 5, message: "Risk: >5 contractions → May reduce fetal oxygen supply and indicate preterm labor risks" },
  accelerations: { normal: 1, message: "Risk: Absent or rare accelerations → May indicate fetal distress or lack of responsiveness" },
  histogram_variance: { normal: 15, message: "Risk: <15 bpm² → Suggests non-reactive fetal heart rate pattern" },
  histogram_mode: { normal: 110, max: 180, message: "Risk: <110 bpm (bradycardia) or >180 bpm (tachycardia) → Can indicate oxygen deprivation or infection" },
  histogram_tendency: { normal: 0, message: "Risk: Decreasing tendency → May indicate worsening fetal condition" },
  fetal_movement: { normal: 5, message: "Risk: Reduced movements (<5 per 2 hours) → Possible distress or placental insufficiency" },
};

const FetalHealth = () => {
  const [formData, setFormData] = useState({});
  const [warnings, setWarnings] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const validateData = () => {
    const newWarnings = [];
    Object.keys(riskLevels).forEach(key => {
      if (formData[key] !== undefined) {
        const condition = riskLevels[key];
        if ((condition.max && (formData[key] < condition.normal || formData[key] > condition.max)) ||
            (!condition.max && formData[key] < condition.normal)) {
          newWarnings.push(`${key.replace(/_/g, ' ').toUpperCase()}: ${condition.message}`);
        }
      }
    });
    setWarnings(newWarnings);
  };

  const handleSubmit = async () => {
    validateData();
    try {
      const response = await axios.post("http://localhost:5000/api", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">Fetal Health Assessment</h1>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          {Object.keys(riskLevels).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{key.replace(/_/g, ' ').toUpperCase()}</label>
              <input
                type="number"
                step="any"
                name={key}
                value={formData[key] || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          ))}
          <div className="mt-4">
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Predict Fetal Health</button>
          </div>
        </div>
        {warnings.length > 0 && (
          <div className="mt-6 p-4 border border-red-400 bg-red-100 rounded">
            <h2 className="font-bold text-red-600">Warning Signs</h2>
            <ul className="list-disc pl-5">
              {warnings.map((warning, idx) => (
                <li key={idx} className="text-sm text-red-600">{warning}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FetalHealth;
