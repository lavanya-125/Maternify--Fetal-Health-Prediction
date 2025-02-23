import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { pdfjs } from "react-pdf";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const App = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [simplifiedText, setSimplifiedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(""); // Use an environment variable in production

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setExtractedText("");
    setSimplifiedText("");
  };

  const extractTextFromImage = async (file) => {
    setLoading(true);
    try {
      const { data } = await Tesseract.recognize(file, "eng");
      setExtractedText(data.text);
      return data.text;
    } catch (error) {
      console.error("Error extracting text from image:", error);
      alert("Failed to extract text from the image.");
    } finally {
      setLoading(false);
    }
  };

  const extractTextFromPDF = async (file) => {
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      return new Promise((resolve, reject) => {
        reader.onload = async () => {
          try {
            const pdf = await pdfjs.getDocument({ data: reader.result }).promise;
            let text = "";
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const content = await page.getTextContent();
              text += content.items.map((item) => item.str).join(" ") + " ";
            }
            setExtractedText(text);
            resolve(text);
          } catch (error) {
            reject(error);
          } finally {
            setLoading(false);
          }
        };
        reader.onerror = reject;
      });
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      alert("Failed to extract text from the PDF.");
      setLoading(false);
    }
  };

  const extractTextFromTxt = async (file) => {
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        setExtractedText(reader.result);
        setLoading(false);
      };
      reader.onerror = () => {
        alert("Error reading text file.");
        setLoading(false);
      };
    } catch (error) {
      console.error("Error extracting text from TXT:", error);
      alert("Failed to extract text from the TXT file.");
      setLoading(false);
    }
  };

  const handleExtractText = async () => {
    if (!file) return alert("Please upload a file first.");
    const fileType = file.type;

    if (fileType.includes("image")) {
      await extractTextFromImage(file);
    } else if (fileType === "application/pdf") {
      await extractTextFromPDF(file);
    } else if (fileType === "text/plain") {
      await extractTextFromTxt(file);
    } else {
      alert("Unsupported file type. Please upload a PDF, image, or TXT file.");
    }
  };

  const simplifyTextWithGemini = async () => {
    if (!extractedText) return alert("Extract text first before simplifying.");
    if (!geminiApiKey) return alert("Please enter your Gemini API key.");

    setLoading(true);
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Simplify this medical text into layman's terms: ${extractedText}`,
                },
              ],
            },
          ],
        },
        {
          params: { key: geminiApiKey },
        }
      );

      const simplified = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      setSimplifiedText(simplified);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      alert("Failed to simplify text. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Medical File Text Simplifier</h1>

      <input type="file" accept=".pdf, .png, .jpg, .jpeg, .txt" onChange={handleFileChange} className="mb-4" />
      
      <input
        type="text"
        placeholder="AIzaSyAMfomMVb82Qzr0FOeiC7s6ZWqWm_Wy0C0"
        value={geminiApiKey}
        onChange={(e) => setGeminiApiKey(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-lg"
      />

      <button
        onClick={handleExtractText}
        disabled={!file || loading}
        className={`px-4 py-2 rounded ${loading ? "bg-gray-400" : "bg-blue-500 text-white"}`}
      >
        {loading ? "Extracting..." : "Extract Text"}
      </button>

      {extractedText && (
        <div className="mt-4 p-4 bg-white shadow rounded w-full max-w-2xl">
          <h2 className="font-semibold">Extracted Text:</h2>
          <p className="text-sm text-gray-700">{extractedText}</p>
        </div>
      )}

      <button
        onClick={simplifyTextWithGemini}
        disabled={!extractedText || loading}
        className={`px-4 py-2 rounded mt-4 ${loading ? "bg-gray-400" : "bg-green-500 text-white"}`}
      >
        {loading ? "Simplifying..." : "Simplify Text"}
      </button>

      {simplifiedText && (
        <div className="mt-4 p-4 bg-white shadow rounded w-full max-w-2xl">
          <h2 className="font-semibold">Simplified Text:</h2>
          <p className="text-sm text-gray-700">{simplifiedText}</p>
        </div>
      )}

      {loading && <p className="mt-4 text-gray-500">Processing...</p>}
    </div>
  );
};

export default App;
