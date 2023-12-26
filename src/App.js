import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter } from './slices/counterSlice';

function App() {

  let counterObj = useSelector(state=>state.counterState);
  let dispatch = useDispatch();

  function changeCounter(){
    //call action creator function
    let actionObj = incrementCounter();

    //dispatch action obj to store
    dispatch(actionObj);
  }

  return (
    <div className='p-5 bg-primary m-4 text-center'>
      <p className='display-3 text-white'>Root component</p>
      <p className='lead fs-1 text-warning'>{counterObj.counter}</p>
      <button className='btn btn-warning' onClick={changeCounter}>Increment</button>
      <div className='row '>
        <div className='col-sm-4 p-4 bg-secondary m-4 mx-auto'>
          <Test1 />
        </div>
        <div className='col-sm-4 p-4 bg-secondary m-4 mx-auto'>
          <Test2 /> 
        </div>
      </div>
    </div>
  );
}

export default App;
