import React,{useState,useCallback} from "react";
import Button from "./Button";

const Counter = () => {
    const [count,setCount] = useState(0);
    const increment = useCallback(()=>{
        setCount((preCount)=>preCount+1)
    },[])
    console.log('Render counter');
    
  return (
    <div>
      <h5>Counter Component</h5>
      <h1>Count:{count}</h1>
      <Button increment={increment}/>
    </div>
  );
};

export default Counter;
