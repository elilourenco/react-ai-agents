import {Chat} from "./components/Chat/Chat"
import { GoogleGenerativeAI } from "@google/generative-ai"
import styles from  "./App.module.css"
import { useState } from "react"
import { Controls } from "./components/Controls/Controls"

 

// Initialize Google Generative AI client
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const gemini=googleai.getGenerativeModel({model: "gemini-2.5-pro"});
const chat= gemini.startChat({history: []})


// Main Application Component
function App() {
  const [messages, setMessages]= useState([])


// Function to add a new message to the chat
  function  addMessage(message){
    setMessages((prevMessages) =>[...prevMessages,message])
  }

  // Function to handle sending user content and receiving AI response
  async function handleContentSend(content){
    
    addMessage({role: "user", content})


    try {

    const result= await chat.sendMessage(content);
    addMessage({role: "assistant", content: result.response.text()})
    
   } catch (error) {
    console.error(error);
    addMessage({role: "system", content: "Sorry i couldn`t process your request. Please try again!"} )
    
   }

  }

  return (
    <div  className={styles.App}>
      <header  className={styles.Header}>
        <img  className={styles.Logo} src="/robot.svg" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />

      </div>
      <Controls
        onSend={handleContentSend}
       />
      </div>
  )
}


export default App
