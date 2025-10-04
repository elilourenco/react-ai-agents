import {Messages} from "../Messages/Messages"
import { Controls } from "../Controls/Controls"
import { Loader } from "../Loader/Loader"
import { useState } from "react"
import styles from "./Chat.module.css"


export function Chat({assistant}){
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



    return(
        <>
        {isLoading && <Loader/>}


        <div className={styles.Chat}>
            <Messages messages={messages} />
    
        </div>

        <Controls
        isDisabled = {isLoading || isStreaming}
        onSend={handleContentSend}
        >

        </Controls>
        </>
    )
}