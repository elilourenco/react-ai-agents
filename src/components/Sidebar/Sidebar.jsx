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

    return(
        <div className={styles.Sidebar}>
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
    )

}