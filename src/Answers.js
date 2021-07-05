import React,{useState} from 'react';
const Answers = () =>{
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const handleChecked = e =>{
        if(e.target.id === "in1"){
            setChecked1(!checked1);
        }else if(e.target.id === "in2"){
            setChecked2(!checked2)
        }else if(e.target.id === "in3"){
            setChecked3(!checked3)
        }else if(e.target.id === "in4"){
            setChecked4(!checked4)
        }
        
      }
    return(
        <div className="response">
        <div className="odp">
          <input type="checkbox" id="in1" checked={checked1} onChange={handleChecked}/>
          <label htmlFor="in1">Odpowiedź 1</label>
        </div>
        <div className="odp">
          <input type="checkbox" id="in2" checked={checked2} onChange={handleChecked}/>
          <label htmlFor="in2">Odpowiedź 2</label>
        </div>
        <div className="odp">
          <input type="checkbox" id="in3" checked={checked3} onChange={handleChecked}/>
          <label htmlFor="in3">Odpowiedź 3</label>
        </div>
        <div className="odp">
          <input type="checkbox" id="in4" checked={checked4} onChange={handleChecked}/>
          <label htmlFor="in4">Odpowiedź 4</label>
        </div>
      </div>
    )
}
export default Answers;