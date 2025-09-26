import {Chat} from "./components/Chat/Chat"
import { GoogleGenAI } from "@google/genai"
import styles from  "./App.module.css"
import { useState } from "react"
import { Controls } from "./components/Controls/Controls"

// Initialize Google Generative AI client
const googleai= new GoogleGenAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)
const gemini= googleai.getGenerativeModel({model: "gemini-1.5-flash"})
const chat= gemini.startChat({history: []})


// Main Application Component
function App() {
  const [messages, setMessages]= useState([])


// Function to add a new message to the chat
  function  addMessage(message){
    setMessages((prevMessages) =>[...prevMessages,message])
  }

  
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
