import './App.css';

import {Fragment} from "react";
import Question from "./components/Question";
import exam from "./qcm";


function App() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    
                    <div className="col-8 offset-2" id="formulaire">
                        <img src="batman.png" alt=""/>
                        <h1>Merci de répondre au questionnaire!</h1>
                        <form action="http://188.165.104.163/exam" method="POST" >
                            <Question question={exam}></Question>
                            <br/><br/>
                            <button type="submit" className="btn btn-primary btn-lg ">Envoyer</button>
                        </form>
                    </div>
                </div>
                
                
            </div>
            
        </Fragment>
    );
}

export default App;
