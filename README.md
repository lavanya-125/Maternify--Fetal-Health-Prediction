> 📌 Note: This is a personal fork of a collaborative project developed by Akarsh, Anwita, Anika, and I.  
> The original repository was created by [Akarsh (techsavy23-creator)](https://github.com/techsavy23-creator).

# Maternify

Maternify is an AI-powered platform for pregnancy risk assessment and fetal health monitoring. Using advanced machine learning, it provides accurate predictions to support informed decision-making. Our dual-prediction system enables early detection, prevention, and timely interventions, enhancing maternal and fetal health outcomes.My teammates Lavanya,Anwita and Anika alongside me were able to create this beautiful project


## Features  
- AI-powered pregnancy risk predictions  
- Dual-prediction system for early detection and prevention  
- Real-time fetal health monitoring  
- Intelligent chatbot providing medical information  
 

## Installation  
1. Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/maternify.git

2. Navigate to the project directory:
   ```sh
   cd maternify

3. Install dependencies:
    ```sh
    pip install -r requirements.txt

4. Run the Project
    ```sh
    python app.py


    
## Backend
Framework:

Flask: Python web framework for creating RESTful APIs
Flask-CORS: Handles Cross-Origin Resource Sharing (CORS) between frontend and backend
Machine Learning & Data Science:

Scikit-learn: ML models (Logistic Regression, Decision Trees, SVM, Random Forest, etc.), data preprocessing, and evaluation
NumPy: Numerical computations and random seeding
Pandas: Data manipulation and analysis (DataFrames, Series)
Data Visualization:

Matplotlib: Core plotting library for visualizations
Seaborn: Advanced statistical visualizations (heatmaps, pair plots, etc.)
API Communication:

JSON: Data format for frontend-backend communication via REST APIs
## Frontend
Framework & Libraries:

React (JavaScript & TypeScript): UI library for building interactive interfaces
Vite.js (Implied): Modern build tool (inferred from CORS port 5173)
Framer Motion: React animation library for smooth UI transitions
Lucide-react: Icon library for scalable and customizable SVG icons
AI Integration:

@google/generative-ai: Library for integrating Google’s Generative AI (e.g., text or image generation)
HTTP Requests:

Axios: Handles API calls between React frontend and Flask backend
State & DOM Management:

useState, useRef: React hooks for managing component state and references
StrictMode & createRoot: React 18+ features for better rendering and strict checks
Styling:

CSS (index.css): Global styling and layouts
## Data Communication
REST API (JSON):
Flask serves as the API layer, communicating with the React frontend using JSON-formatted data.
Axios handles API calls on the frontend side.
