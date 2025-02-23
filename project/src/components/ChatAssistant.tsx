import  { useState , useRef} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {Send, Delete, } from 'lucide-react'

// Style components using Tailwind CSS
import ChatHistory from './ChatHistory';


const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { type: string; message: string }[]
  >([
    {
      type: "bot",
      message:
        `Hello ! I'm chatbot, your personal assistant. How can I help you today?`,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);


 

  const apiKey = "AIzaSyAMfomMVb82Qzr0FOeiC7s6ZWqWm_Wy0C0";
 
  // Initialize your Gemini API
  const genAI = new GoogleGenerativeAI(
    apiKey
  );
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are a specialized AI chatbot that only provides answers related to health, wellness, medicine, nutrition, fitness, and mental well-being. If a user asks a question outside these topics, politely inform them that you can only assist with health-related inquiries. Keep responses accurate, informative, and easy to understand. Always prioritize safety and evidence-based information. If a question requires medical diagnosis or treatment, advise the user to consult a qualified healthcare professional
    
    Please answer the queries in context of prevoius conversation. using this JSON

    ${JSON.stringify([chatHistory.map((item) => item.message)])}
    
    `
    ,
  });
  

  // Handle user input
  const handleUserInput = (e:any) => {
    setUserInput(e.target.value);
  };

  // Send message to Gemini API
  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch {
      console.error("Error sending message");
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Clear chat history
  const clearChat = () => {
    setChatHistory([]);
  };

  
  return (
    <div className="flex flex-col h-screen bg-theme overflow-auto">
      {/* Header */}
    


      <main className="flex flex-col flex-grow container mx-auto px-4 py-8 mb-16">
      
        <ChatHistory chatHistory={chatHistory} />
      
        <div ref={chatEndRef} />
      </main>

      {/* Footer with Input and Buttons */}
      <footer className="bg-theme p-4 fixed bottom-0 left-0 w-full">
        <div className="flex container mx-auto">
          <span className="mt-[15px] mr-[10px]"></span><input
            type="text"
            className="flex-grow px-6 py-3 rounded-full bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleUserInput}
            disabled={isLoading}
          />
          <button
            className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={sendMessage}
            disabled={isLoading}
          >
            <Send className="size-6"/>
          </button>
          <button
            className="ml-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={clearChat}
          >
            <Delete className="size-6"/>
          </button>
          
        </div>  
      </footer>
    </div>
  );
};

export default Chatbot;