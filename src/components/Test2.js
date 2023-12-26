import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounterByValue } from '../slices/counterSlice';

function Test2() {
  let counterObj = useSelector(state=>state.counterState);
  let dispatch = useDispatch();

  function changeCounterBy10(){
    let actionObj = incrementCounterByValue(10);
    dispatch(actionObj);
  }

  return (
    <div>
        <p className='display-3'>Test2</p>
        <p className='lead fs-1 text-warning'>{counterObj.counter}</p>
        <button className='btn btn-success' onClick={changeCounterBy10}>Increment by 10</button>
    </div>
  )
}

export default Test2