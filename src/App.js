import React, {useState}  from 'react';
import Answers from './Answers';

import './App.scss';

const App = () => {
  const APIToken = "OaR3Wj476jgWiKh4GRgw38n6o2KcFA6JFSg6GU5o";
  const URL = "https://quizapi.io/api/v1/questions/apiKey=OaR3Wj476jgWiKh4GRgw38n6o2KcFA6JFSg6GU5o";
  const [questList, setQuestList] = useState(null);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Submit");
  }
  const handlePrev = () =>{
    console.log("Prev")
  }
  const handleNext = () =>{
    console.log("Next")
  }

  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="request">
          <p>Lorem ipsum </p>
        </div>
        <Answers/>
        <div className="btns">
          <button className="btn" onClick={handlePrev}>Prev</button>
          <button className="btn" onClick={handleNext}>Next</button>
        </div>

      </form>
    </div>
  );
}

export default App;
