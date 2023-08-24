import React from "react";
import { DisplayLanguage } from "./DisplayLanguage"
import { LanguageContext } from "./LanguageContext";


export class App extends React.Component {
    state = {
        language: 'en' 
    }

    handleLanguage = (event) => {
        this.setState({language: event.target.value}) 
        }
    

    render() {
        return <div>
                 <select value={this.state.language} onChange={this.handleLanguage}>
                    <option value="en">English</option>
                    <option value='it'>Italian</option>
                 </select>
                 <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                 </LanguageContext.Provider>
               </div>
    }
}
