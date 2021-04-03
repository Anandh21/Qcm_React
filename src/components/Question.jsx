import AnswerRadio from "./AnswerRadio";
import {Fragment} from "react";
import AnswerCheckbox from "./AnswerCheckbox";
import AnswerText from "./AnswerText";
import AnswerToggle from "./AnswerToggle";


function Question(props){
    
    var varQuestion = props.question.map((elm,index)=>{
        console.log(elm)
            if(elm.answer.type === "radio"  ){
                return (
                    <Fragment>
                        <div key={index}>
                            <h4>{elm.question}</h4>
                            <AnswerRadio answer={elm.answer}/>
                        </div>
                    </Fragment>
                )
            }
            else if(elm.answer.type === "checkbox"){
                return (
                    <Fragment>
                        <div key={index}>
                            <h4>{elm.question}</h4>
                            <AnswerCheckbox answer={elm.answer}/>
                        </div>
                    </Fragment>
                )
            }
            else if(elm.answer.type === "text")
            {
                return (
                    <Fragment>
                        <div key={index}>
                            <AnswerText props={elm}/>
                        </div>
                    </Fragment>
                )
            }
            else if( elm.answer.type === "toggle")
            {
                return(
                    <Fragment>
                        <div key={index}>
                            <h4>{elm.question}</h4>
                            <AnswerToggle props={elm}/>
                        </div>
                    </Fragment>
                )
            }
            return true
        }
    )
    return (varQuestion)
}
export default Question