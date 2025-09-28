import {Chat} from "./components/Chat/Chat"
import { Assistant } from "./assistants/openai"
import styles from  "./App.module.css"
import { useState } from "react"
import { Controls } from "./components/Controls/Controls"
import { Loader } from "./components/Loader/Loader"

 

// Main Application Component
function App() {

  const assistant=new Assistant();
  const [messages, setMessages]= useState([])

  const [isLoading, setIsLoading]= useState(false)  


// Function to add a new message to the chat
  function  addMessage(message){
    setMessages((prevMessages) =>[...prevMessages,message])
  }

  // Function to handle sending user content and receiving AI response
  async function handleContentSend(content){
    setIsLoading(true)
    
    addMessage({role: "user", content})

    try {
      const result= await assistant.chat(content,messages);

    
    addMessage({role: "assistant", content: result})
    
   } catch (error) {
    console.error(error);
    addMessage({role: "system", content: "Sorry i couldn`t process your request. Please try again!"} )
    
   }finally{
    setIsLoading(false)
   }

  }

  return (
    <div  className={styles.App}>
      {isLoading && <Loader/> }
      <header  className={styles.Header}>
        <img  className={styles.Logo} src="/robot.svg" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />

      </div>
      <Controls
      isDisabled={isLoading}
        onSend={handleContentSend}
       />
      </div>
  )
}


export default App
