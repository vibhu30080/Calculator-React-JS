import React from "react";
import "./keypad.css";

export default class Keypad extends React.Component{
    render(){
        
        return(
            <div className="buttons">
                <button className="button CE" name="CE" onClick={a=> this.props.onClick(a.target.name)}>CE</button>
                <button className="button C" name="C" onClick={a=> this.props.onClick(a.target.name)}>C</button>
                <button className="button operator" name="%" onClick={a=> this.props.onClick(a.target.name)}>%</button>
                <button className="button operator" name="/" onClick={a=> this.props.onClick(a.target.name)}>/</button><br/>
                
                <button className="button" name="1" onClick={a=> this.props.onClick(a.target.name)}>1</button>
                <button className="button" name="2" onClick={a=> this.props.onClick(a.target.name)}>2</button>
                <button className="button" name="3" onClick={a=> this.props.onClick(a.target.name)}>3</button>
                <button className="button operator" name="*" onClick={a=> this.props.onClick(a.target.name)}>X</button><br/>

                <button className="button" name="4" onClick={a=> this.props.onClick(a.target.name)}>4</button>
                <button className="button" name="5" onClick={a=> this.props.onClick(a.target.name)}>5</button>
                <button className="button" name="6" onClick={a=> this.props.onClick(a.target.name)}>6</button>
                <button className="button operator" name="-" onClick={a=> this.props.onClick(a.target.name)}>-</button><br/>

                <button className="button" name="7" onClick={a=> this.props.onClick(a.target.name)}>7</button>
                <button className="button" name="8" onClick={a=> this.props.onClick(a.target.name)}>8</button>
                <button className="button" name="9" onClick={a=> this.props.onClick(a.target.name)}>9</button>
                <button className="button operator" name="+" onClick={a=> this.props.onClick(a.target.name)}>+</button><br/>

                <button className="button" name="." onClick={a=> this.props.onClick(a.target.name)}>.</button>
                <button className="button" name="0" onClick={a=> this.props.onClick(a.target.name)}>0</button>
                <button className="button equals" name="=" onClick={a=> this.props.onClick(a.target.name)}>=</button><br/>
            </div>
        );
    }
    
}