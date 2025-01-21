export interface ChatMessage {
    id: string
    content: string
    role: "user" | "assistant"
  }
  
  export interface ChatResponse {
    success: boolean
    message: string
  }
  
  