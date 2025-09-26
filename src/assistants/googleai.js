import { GoogleGenerativeAI } from "@google/generative-ai";




// Initialize Google Generative AI client
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

class Assistant {
    #chat;
    constructor(model="gemini-2.5-pro"){ 
        const gemini=googleai.getGenerativeModel({model});
        this.#chat= gemini.startChat({history: []})
        
    }

    async function chat(content) {

        try {
            
        } catch (error) {
            
        }
        
    }
}