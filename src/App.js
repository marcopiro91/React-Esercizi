import React, {useState} from "react";
import { DisplayLanguage } from "./DisplayLanguage"
import { LanguageContext } from "./LanguageContext";


export function App() {
    const [language, setLanguage] = useState('en');
  
    const handleChangeLanguage = (event) => {
      setLanguage(event.target.value);
    };
  
    return (
        <div>
          <select onChange={handleChangeLanguage} value={language}>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="Sp">Spanish</option>
          </select>
          <LanguageContext.Provider value={language}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        </div>
        )
}