import React from "react";
import DISPLAY from "./Components/display";
import KEYPAD from "./Components/keypad";
import "./App.css";


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expression:"",
            result:"0"
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.onKeyPress)
    }

    fontCheck = (element,overflow) =>{
        let fontSize = parseInt(element.style.fontSize);
        fontSize= fontSize-(0.044*fontSize);
        element.style.fontSize=fontSize+"px";
    };

    fontback = (element,overflow) =>{
        let fontSize = parseInt(element.style.fontSize);
        if(overflow>10 && fontSize<40){
        fontSize= fontSize+(0.064*fontSize);
        element.style.fontSize=fontSize+"px";
        }
    };


    calculate = () => {
        try{
            let result=eval(this.state.result);
            
            if(result-Math.floor(result)!==0){
                let r1 = result.toFixed(8);
                this.setState({
                    expression: this.state.result,
                    result: r1
                })
            }
            else{let r1 = result
            
            this.setState({
                expression: this.state.result,
                result: r1
            })
        }
        }
        catch{
            this.setState({result:"ERROR!!!"})
        }
    };

    backspace = () =>{
        this.setState({result:this.state.result.slice(0,-1)});
        if(this.state.result===""){this.setState({result:"0"});}
    };

    reset = () =>{
        this.setState({expression:"",result:"0"});

    };

    onClick = event =>{
        var element = document.getElementById("result");
        var overflow = element.textContent.split("").length;

        
        if(event === "="){
            this.calculate()
        }

        else if(event === "C"){
            this.backspace();
            this.fontback(element,overflow);
        }

        else if(event === "CE"){
            this.reset()
        }
    
    if(overflow<24){
        if(overflow>10 && parseInt(element.style.fontSize)>20){
            this.fontCheck(element,overflow);
        }
        if(event === "C"){
            this.fontback(element,overflow);
        }
        
        if(overflow<11){
            element.style.fontSize="40px";
        }
        if(event === "="){
            this.calculate()
        }

        else if(event === "C"){
            this.backspace()
        }

        else if(event === "CE"){
            this.reset()
        }
        
        else if(event === "%"){
            this.setState({result: this.state.result/100,expression: this.state.result+"%"})
        }
        else{
            if(this.state.result === "0"){
                this.setState({result: event})    
            }
            else{
            this.setState({result:this.state.result + event})
            }
        }
    }
    };
   

    onKeyPress = event =>{
        var element = document.getElementById("result");
        var overflow = element.textContent.split("").length;

        
        if(event.key === "=" || event.key === "Enter"){
            this.calculate()
        }

        else if(event.key === "Backspace"){
            this.backspace();
            this.fontback(element,overflow);
        }

        else if(event.key === "Delete"){
            this.reset()
        }
    let inv_key= false;   
    if( event.key==="Shift" || event.key==="Alt"|| event.key==="Shift"|| event.key==="Backspace"){
        inv_key=true;
    }
    if(overflow<24){
        if(overflow>10 && parseInt(element.style.fontSize)>20 && inv_key=== false){
            this.fontCheck(element,overflow);
        }
        if(event.key === "Backspace"){
            this.fontback(element,overflow);
        }
        
        if(overflow<11){
            element.style.fontSize="40px";
        }
        if(event.key === "=" || event.key === "Enter"){
            this.calculate()
        }

        else if(event.key === "Backspace"){
            this.backspace()
        }

        else if(event.key === "Delete"){
            this.reset()
        }
        else if(event.key === "Shift" || event.key === "CapsLock" || event.key === "Alt" || event.key === "Control"){
            
        }
        else if(event.key ==="%"){
            this.setState({expression: this.state.result/100})
        }
        else{
            if(this.state.result==="0"){
                this.setState({result: event.key})    
            }
            else{
            this.setState({result:this.state.result + event.key})
            }
        }
    }
    };



    render(){
        return(
            <div>
                <h1 className="header">Calculator</h1>
                <div className="flex">
                    <div className="body">
                        <DISPLAY result={this.state.result} expression={this.state.expression} onKeyPress={this.onKeyPress} />
                        <KEYPAD onClick={this.onClick}  />
                    </div>
                </div>
                <footer className="footer">Made by Vibhor Khanna in {new Date().getFullYear()}</footer>
            </div>
        );
    }
}