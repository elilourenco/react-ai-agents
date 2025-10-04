import styles from  "./App.module.css"
import { Chat } from "./components/Chat/Chat"
import { Assistant } from "./components/Assistant/Assistant"
import {Theme} from "./components/Theme/Theme"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { useState } from "react"




const CHATS =[


  {  id:2, 
    title:"What is the best AI model ?",
    messages:[
      {role: "user", content:"what is better ChatGPT or Gemini"},
      { role:"assistant",
        content:"Hi, Can  you explain  for what  type  os tasks  you will  use it ?",
      },
    ]

  },
  
  {
    id:4,
    title:"What is the future of AI?",
    messages:[
      {role: "user", content:"what is better ChatGPT or Gemini"},
      { role:"assistant",
        content:"Hi, Can  you explain  for what  type  os tasks  you will  use it ?",
      },
    ] 
  },
     

    ]

 

// Main Application Component
function App() {
  const [assistant, setAssistant] = useState()
  const [chats, setChats] = useState(CHATS)
  const [ActiveChatId, setActiveChatId] = useState(2)

  function handleAssistantChange(newAssistant){
    setAssistant(newAssistant);
}

  return (
    <div  className={styles.App}>
 
      <header  className={styles.Header}>
        <img  className={styles.Logo} src="/robot.svg" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.Content}>
      <Sidebar 
        chats={chats} 
        ActiveChatId={ActiveChatId} 
        onActiveChatIdChange={setActiveChatId}
      />

      
      <main className={styles.Main} >
        <Chat assistant={assistant} />

        
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
