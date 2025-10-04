import { useState } from "react";
import styles from "./Sidebar.module.css"



    const CHATS =[
        {
            id:1, 
            title:"How to use AI Agents ?"
       },

     {  id:2, 
        title:"What is the best AI model ?"
     },

     {id:3,
        title:"How to build a React App ?"
     },

     {id:4,
        title:"What is the future of AI ?"  
     },
     {id:5,
        title:"How to use AI Agents ?"
     }

    ]

    export function Sidebar({chats = CHATS, activeChatId=1}) {
        const [isOpen, setIsOpen] = useState(false);

        function handleSidebarToggle(){
            setIsOpen(!isOpen);
        }

        function handleEscapeClick(event) {
            if( isOpen  && event.key === "Escape"){
                setIsOpen(false);
            }
            
        }

    return(

        
    <>
    <button className={styles.MenuButton} 
    onClick={handleSidebarToggle}
    onKeyDown={handleEscapeClick} >
        <MenuIcon />
    </button>

        <div className={styles.Sidebar} data-open={isOpen} >
            <ul className={styles.Chats} >
                {chats.map((chat) =>(
                    <li key={chat.id} className={styles.Chat}  data-active={chat.id === activeChatId} >
                        <button className={styles.ChatButton} > 
                            <div className={styles.ChatTitle}>{chat.title}</div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

        {isOpen && <div className={styles.Overlay} onClick={handleSidebarToggle}></div>}
    </>
    )



}


function MenuIcon(){
    return(
        
        <svg xmlns="http://www.w3.org/2000/svg"
             height="24px" viewBox="0 -960 960 960"
             width="24px" fill="#e3e3e3">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg> 

    )
}