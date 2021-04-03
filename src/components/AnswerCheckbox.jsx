import React from 'react';

function AnswerCheckbox(props){
    return(
        props.answer.options.map((option, index)=>(
            <div key={index} className="form-check">
                <input type={props.answer.type} id={index} name={props.answer.name} value={option.name} className="form-check-input"/>
                <label htmlFor={index} className="form-check-label"> {option.text}</label>
            </div>
        ))
    )
}
export default AnswerCheckbox;