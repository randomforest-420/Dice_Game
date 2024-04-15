import { useState } from "react";
import "./NumberSelector.css";

const NumberSelector = ({setError,selectedNumber,setSelectedNumber}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [selectedBtn,setSelectedBtn]=useState(null);
  const handleClick = (value) => {
    setSelectedBtn(value === selectedBtn ? null : value);
    setSelectedNumber(value);
    setError(" ");
  
};
  return (
    <div className="end">
      <div className="box">
        {arr.map((value) => (
          <button className={selectedBtn === value ? 'sel' : ''}
          onClick={()=>handleClick(value)} 
          key={value}>{value}
          </button>
        ))}
      </div>
      <h3>
          Select Number
        </h3>
    </div>
  );
};

export default NumberSelector;
