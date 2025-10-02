import Anthropic from '@anthropic-ai/sdk';



const anthropic = new Anthropic({
  apiKey:import.meta.env.VITE_ANTHROPIC_AI_API_KEY, 
  dangerouslyAllowBrowser:true,
  
});


export class Assistant {
    #client;
    #model;
    

    constructor(model="claude-opus-4-20250514", client=openai){ 
        this.#model=model
        this.client= client;

    }

    async chat(content,history) {

        try {
            const result = await this.#client.messages.create({
                model: this.#model,
                messages: [...history , {content, role:"user"}],
                max_tokens: 1024
                ,
                
            });

            return  result.content[0].message.content;
        } catch (error) {
            
            
        }
        
    }


async *chatStream(content,history) {
    try {
        const result =await this.#client.chat.completions.create({
            model: this.#model,
             messages: [...history , {content, role:"user"}],
            stream: true,           

        });
       for await (const chunk of result) {
           yield chunk.choices[0]?.delta?.content || "";
       }
    } catch (error) {
        throw (error);
    }
}
}
