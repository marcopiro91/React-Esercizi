import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    en: {
        CURRENT_TIME: "Welcome!"
    } ,
    it: {
        CURRENT_TIME: "Benvenuto!"
    } ,
}


export class DisplayLanguage extends React.Component {
    render() {
        return <LanguageContext.Consumer>
                  {(Language) => {
                    return <h1>{strings[Language].CURRENT_TIME}</h1>
                  }}
               </LanguageContext.Consumer>
        
    }
}