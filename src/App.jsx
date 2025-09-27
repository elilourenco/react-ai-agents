import {Chat} from "./components/Chat/Chat"
import { Assistant } from "./assistants/googleai"
import styles from  "./App.module.css"
import { useState } from "react"
import { Controls } from "./components/Controls/Controls"

 


// Main Application Component
function App() {

  const assistant=new Assistant();
  const [messages, setMessages]= useState([])


// Function to add a new message to the chat
  function  addMessage(message){
    setMessages((prevMessages) =>[...prevMessages,message])
  }

  // Function to handle sending user content and receiving AI response
  async function handleContentSend(content){
    
    addMessage({role: "user", content})


    try {
      const result= await assistant.chat(content);

    
    addMessage({role: "assistant", content: result})
    
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
