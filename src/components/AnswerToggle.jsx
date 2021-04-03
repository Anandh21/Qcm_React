import React from 'react';


function AnswerToggle(props){
    
    return(
        <div>
            <label className="switch" htmlFor={props.props.answer.name}>
                <input type="checkbox" name={props.props.answer.name} id={props.props.answer.name} value={props.props.answer.name}
                />
                <span className="slider"></span>
            </label>
        </div>
        
    )
}
export default AnswerToggle;