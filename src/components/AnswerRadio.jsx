import React from 'react';

function AnswerRadio(props){
    return (
        props.answer.options.map((option , index)=>(
            <div key={index} className="form-check">
                <input className="form-check-input" type={props.answer.type} id={index} name={props.answer.name} value={option.value}/>
                <label htmlFor={index} className="form-check-label"> {option.text} </label>
            </div>
        ))
    )
}

export default AnswerRadio;