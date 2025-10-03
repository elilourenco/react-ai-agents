import {Chat} from "./components/Chat/Chat"
import { Assistant as AssistantClass } from "./assistants/xai"
import styles from  "./App.module.css"
import { useState } from "react"
import { Controls } from "./components/Controls/Controls"
import { Loader } from "./components/Loader/Loader"
import { Assistant } from "./components/Assistant/Assistant"
import {Theme} from "./components/Theme/Theme"
import { Sidebar } from "./components/Sidebar/Sidebar"

 

// Main Application Component
function App() {

  let assistant;
  const [messages, setMessages]= useState([])

  const [isLoading, setIsLoading]= useState(false) 
  const [isStreaming, setIsstreaming]= useState(false)


// Function to update the content of the last message
  function UpdateLastMessageContent(content){
    setMessages((prevMessages) => prevMessages.map((message, index) =>
       index === prevMessages.length - 1
      ? { ...message, content: 
        `${message.content}${content}` }: message ))
  }


// Function to add a new message to the chat
  function  addMessage(message){
    setMessages((prevMessages) =>[...prevMessages,message])
  }

  // Function to handle sending user content and receiving AI response
  async function handleContentSend(content){
    setIsLoading(true)
    
    addMessage({role: "user", content})

    try {
      const result= await assistant.chat(content, messages.filter(({role}) => role !== "system"))
      let  isfirstChunk=false;

      //for await (const chunk of result) {

        if(!isfirstChunk){
          isfirstChunk=true;
          addMessage({role: "assistant", content:""})
          setIsLoading(false)
          //setIsstreaming(true)
        }
        UpdateLastMessageContent(result)
        
      //}

      //setIsstreaming(false)


    
   } catch (error) {
    console.error(error);
    addMessage({role: "system", 
      content:error?.message ?? "Sorry i couldn`t process your request. Please try again!"} )
    setIsLoading(false)
    setIsstreaming(false)
    
   }
  }

  function handleAssistantChange(newAssistant){
    assistant =newAssistant;
}

  return (
    <div  className={styles.App}>
      {isLoading && <Loader/> }
      <header  className={styles.Header}>
        <img  className={styles.Logo} src="/robot.svg" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.Content}>
      <Sidebar />

      
      <main className={styles.Main} >

        <div className={styles.ChatContainer}>
        
          <Chat messages={messages} />

        </div>
        <Controls
          isDisabled={isLoading || isStreaming}
          onSend={handleContentSend}
        />
        <div  className={styles.Configuration}>

        <Assistant onAsistantChange={handleAssistantChange}/>
        <Theme />

      </div>
       

      </main>
      </div>
      <footer className={styles.Footer} >
        <span>Made with ❤️ by Elizandra</span>
        
       </footer>
      </div>
  )
}


export default App
