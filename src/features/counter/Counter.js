import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
//import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        {/* <input type="text" id="inc_val_text" /> */}
        <textarea id="inc_val_text"/>
        <button
          aria-label="Increment by Amount"
          //onClick={() => dispatch(incrementByAmount(Number(document.getElementById("inc_val_text").val)))}
          onClick={() => console.log(document.getElementById("inc_val_text").val)}
        >
            
          Increment By Amount
        </button>
      </div>
    </div>
  )
}