import {Chat} from "./components/Chat/Chat"
import styles from  "./App.module.css"

function App() {

  return (
    <div  className={styles.App}>
      <header  className={styles.Header}>
        <img  className={styles.Logo} src="/robot.svg" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat />

      </div>
      </div>
  )
}

export default App
