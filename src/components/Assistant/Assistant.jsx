import { useEffect, useState } from "react";
import { Assistant as GoogleAIAssistant } from "../../assistants/googleai";
import { Assistant as OpenAIAssistant } from "../../assistants/openai";
import { Assistant as DeepSeekAIAssistant } from "../../assistants/deepseekai";
import { Assistant as AnthropicAIAssistant } from "../../assistants/anthropicai";
import { Assistant as XAIAssistant } from "../../assistants/xai";
import styles from "./Assistant.module.css"



 const  assistantMap ={
    googleai: GoogleAIAssistant,
    openai: OpenAIAssistant,
    deepseekai: DeepSeekAIAssistant,
    anthropicai: AnthropicAIAssistant,
    xai: XAIAssistant,
 }


export function Assistant({onAsistantChange}) {
const [value, setValue]= useState("googleai:gemini-2.5-pro");


function handleValueChange(event){
    setValue(event.target.value);
}

useEffect(()=>{
    const [assistant,model]= value.split(":");
    const  AsistantClass= assistantMap[assistant];
   
    if(!AsistantClass){
       throw new Error(`Assistant not found for:", ${assistant} or model: ${model}`);
    } 

    onAsistantChange(new AsistantClass(model));


},[value])





    return (
    <div className={styles.Assistant} >
        <span>
            Assistant :
        </span>

        <select defaultValue={value} onChange={handleValueChange} >

            <optgroup label="Google AI" >
                <option value="googleai:gemini-2.5-pro"> Gemini 2.5-pro</option>
                <option value="googleai:gemini-2.5-flash"> Gemini 2.5 flash </option>
            </optgroup>
            
            <optgroup label="Open AI" >
                <option value="googleai">Open AI </option>
                <option value="openai:gpt-4"> GPT-4 </option>
                <option value="openai:gpt-4-turbo"> GPT-4 Turbo </option>
                <option value="openai:gpt-3.5-turbo"> GPT-3.5 Turbo </option>
                <option value="openai:gpt-3.5-turbo-16k"> GPT-3.5 Turbo 16k </option>
            </optgroup>

            <optgroup label="DeepSeek AI" >
                <option value="deepseekai:deepseek-chat"> DeepSeek Chat </option>
                <option value="deepseekai:deepseek-code"> DeepSeek Code </option>
                <option value="deepseekai:deepseek-code-pro"> DeepSeek Code Pro </option>
            </optgroup>
        
            <optgroup label="Anthropic AI" >
                <option value="anthropicai:claude-3"> Claude 3 </option>
                <option value="anthropicai:claude-2"> Claude 2 </option>
                <option value="anthropicai:claude-instant-100k"> Claude Instant 100k </option>
            </optgroup>

            <optgroup label="X AI" >
                <option value="xai:grok-code-fast-1"> Grok Code Fast 1 </option>
                <option value="xai:grok-code-advanced-1"> Grok Code Advanced 1 </option>
                <option value="xai:grok-chat-advanced-1"> Grok Chat Advanced 1 </option>
            </optgroup>
            
        </select>


    </div>
);
}           