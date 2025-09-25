import {Chat} from "./components/Chat/Chat"
import styles from  "./App.module.css"
import { useState } from "react"
import { Controls } from "./components/Controls/Controls"

function App() {
  const [messages, setMessages]= useState(MESSAGES)

  return (
    <div  className={styles.App}>
      <header  className={styles.Header}>
        <img  className={styles.Logo} src="/robot.svg" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />

      </div>
      <Controls />
      </div>
  )
}

const MESSAGES=[
  {
    role:"user",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },

  {
    role:"assistant",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },

   {
    role:"user",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },

  {
    role:"assistant",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },
   {
    role:"user",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },

  {
    role:"assistant",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },
   {
    role:"user",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  },

  {
    role:"assistant",
    content:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "

  }
]
export default App
