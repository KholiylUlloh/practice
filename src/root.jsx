import React, {useState, useReducer} from 'react'


const Root = () => {
  const [amount, setAmount] = useState(localStorage.getItem('value')|| 2);
  const reducer = (st, action)=>{
    switch(action.type){
      case 'plus':
        localStorage.setItem('count', st + 1);
        return st + 1;
      case 'minus':
        return st - 1
      case 'byamount':
        localStorage.setItem('count',st + +action.payload.amount)
        return st + +action.payload.amount
        default: return st;
    }
  }
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, +localStorage.getItem('count') || 0);
  return (
    <div>
       <h1>UseState:{count}</h1>
       <button onClick={()=>setCount(count + 1)}>+</button>
       <button onClick={()=>setCount(count - 1)}>-</button>
       <h1>UseReducer:{localStorage.getItem('count')||state}</h1>
       <button onClick={()=>dispatch({type: 'plus'})}>+</button>
       <button onClick={()=>dispatch({type: 'minus'})}>-</button>
       <select name="" id="" onChange={({target})=>setAmount(localStorage.setItem('value',target.value))}
        defaultValue={localStorage.getItem('value')}
       >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
       </select>
       <button onClick={()=>dispatch({type: 'byamount', payload:{amount}})}>{localStorage.getItem('value')||amount}</button>
       {/* <button onClick={localStorage.removeItem('value')}>Clear One</button> */}
       <button>Clear All</button>
    </div>
  )
}

export default Root;