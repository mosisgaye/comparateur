interface EnvConfig {
    apiKey: string;
  }
  
  export const env: EnvConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };
  