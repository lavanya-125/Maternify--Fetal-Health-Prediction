import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface FormData {
  age: number;
  systolicBP: number;
  diastolicBP: number;
  bloodGlucose: number;
  bodyTemp: number;
  heartRate: number;
}

const PregnancyRisk = () => {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    systolicBP: 0,
    diastolicBP: 0,
    bloodGlucose: 0,
    bodyTemp: 0,
    heartRate: 0,
  });

  const [prediction, setPrediction] = useState<{ result: string; risk: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: Number(value) }));
  };

  const calculateRisk = (): string => {
    const { age, systolicBP, diastolicBP, bloodGlucose, bodyTemp, heartRate } = formData;

    if (systolicBP > 140 || diastolicBP > 90 || bloodGlucose > 140 || heartRate > 100 || bodyTemp > 100.4) {
      return 'High Risk due to high blood pressure and high blood glucose';
    }
    if ((systolicBP > 120 && systolicBP <= 140) || (diastolicBP > 80 && diastolicBP <= 90) || (bloodGlucose > 95 && bloodGlucose <= 140) || (heartRate > 80 && heartRate <= 100)) {
      return 'Medium Risk due to slightly higher systolic blood pressure ';
    }
    return 'Low Risk';
  };

  const handlePredict = () => {
    const riskLevel = calculateRisk();
    setPrediction({
      result: 'Based on the provided health parameters, our analysis indicates potential pregnancy-related concerns that require attention.',
      risk: riskLevel,
    });
  };

  const handleClear = () => {
    setFormData({
      age: 0,
      systolicBP: 0,
      diastolicBP: 0,
      bloodGlucose: 0,
      bodyTemp: 0,
      heartRate: 0,
    });
    setPrediction(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#FFAFCC] mb-8 text-center">Pregnancy Risk Assessment</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="number"
              name={key}
              value={formData[key as keyof FormData]}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FFAFCC]"
            />
          </div>
        ))}
        <div className="flex gap-4 mt-6">
          <button onClick={handlePredict} className="bg-[#FFAFCC] text-white px-6 py-3 rounded-md flex items-center gap-2">
            <AlertTriangle size={20} /> Predict Risk
          </button>
          <button onClick={handleClear} className="border border-gray-300 px-6 py-3 rounded-md flex items-center gap-2">
            <RefreshCw size={20} /> Clear
          </button>
        </div>
        {prediction && (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Prediction Results</h3>
            <p className="text-gray-600">{prediction.result}</p>
            <span className={`font-semibold ${prediction.risk === 'High Risk due to high blood pressure and high blood glucose' ? 'text-red-500' : prediction.risk === 'Medium Risk due to slightly higher systolic blood pressure' ? 'text-yellow-500' : 'text-green-500'}`}>
              {prediction.risk}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PregnancyRisk;
