import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context = createContext();

// export const ContextProvider = Context.Provider;

function ContextProvider({ children }) {
  {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultdata, setResultdata] = useState("");

    const delayPara = (index, nextWord) => {
      setTimeout(() => {
        setResultdata((prev)=>prev + nextWord)
      }, 50 *index);
    };

    const onSent = async (input) => {
      setResultdata("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      setPrevPrompt((prev)=>[...prev,input])
      const response = await runChat(input);

      // Handle **bold**
      let responseArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i % 2 === 0) {
          newResponse += responseArray[i]; // plain text
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>"; // bold text
        }
      }

      // Optionally handle *italic* and \n (new lines)
      newResponse = newResponse
        .replace(/\*(.*?)\*/g, "<i>$1</i>") // convert *text* → <i>text</i>
        .replace(/\n/g, "<br/>"); // convert new lines to <br>
      
      let newResponseArray  = newResponse.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i]
        delayPara(i,nextWord+" ")
      }
      // setResultdata(newResponse);
      setLoading(false);
      setInput("");
    };

    const contextValue = {
      prevPrompt,
      setPrevPrompt,
      onSent,
      recentPrompt,
      setRecentPrompt,
      showResult,
      loading,
      resultdata,
      input,
      setInput,
    };
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
  }
}
export default ContextProvider;
