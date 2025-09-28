// // Import Google Generative AI SDK
// // my api="AIzaSyAgGb6o-idvjBzVdDYUW4eY_cSfA3q4mPo"
// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// const MODEL_NAME = "gemini-2.5-flash";
//   //  const API_KEY =""
// const API_KEY = "AIzaSyAgGb6o-idvjBzVdDYUW4eY_cSfA3q4mPo";

// async function runChat(prompt) {
//   // ✅ Pass API key while creating instance
//   const genAI = new GoogleGenerativeAI(API_KEY);

//   // ✅ Get model instance correctly
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   // ✅ Correct spelling: generationConfig
//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 1024,
//   };

//   // ✅ Correct spelling: safetySettings & HarmBlockThreshold
//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.HARM_BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.HARM_BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.HARM_BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.HARM_BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   // ✅ Pass configs and settings properly
//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [],
//   });

//   // ✅ Send message to the chat
//   const result = await chat.sendMessage(prompt);

//   // ✅ Get response text safely
//   const response = await result.response;
//   console.log("Gemini Response:", response.text());
// }

// export default runChat;


import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = "AIzaSyAgGb6o-idvjBzVdDYUW4eY_cSfA3q4mPo";

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function runChat(prompt) {
  console.log(prompt)
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });
  // console.log(response.text);
  return response.text;
}

export default runChat;