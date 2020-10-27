import React from "react";
import "./display.css";

export default class Display extends React.Component{
    render(){
        let {result, expression} = this.props;
        return(
            <div className="center">
                <div className="expression">
                    <p id="exp">{expression}</p>
                </div>
                <div className="display">
                    <p id="result">{result}</p>
                </div>
            </div>
        );
    }
    
}