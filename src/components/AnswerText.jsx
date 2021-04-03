import React from 'react'

function AnswerText(props){
    return(
        <div className="form-group ">
            <label htmlFor={props.props.answer.name} className="mr-3">{props.props.question}</label><br/>
            <input type={props.props.answer.type} name={props.props.answer.name} id={props.props.answer.name}/>
        </div>
    )
}
export default AnswerText;