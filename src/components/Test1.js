import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter } from '../slices/counterSlice';

function Test1() {
  let counterObj = useSelector(state=>state.counterState);
  let dispatch = useDispatch()

  function changeCounter(){
    let actionObj = decrementCounter();
    dispatch(actionObj);
  }
  return (
    <div>
        <p className='display-3'>Test2</p>
        <p className='lead fs-1 text-warning'>{counterObj.counter}</p>
        <button className='btn btn-danger' onClick={changeCounter}>Decrement</button>
    </div>
  )
}

export default Test1