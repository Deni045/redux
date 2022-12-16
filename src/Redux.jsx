import { useDispatch, useSelector } from "react-redux";
import Reset from "./Reset";

function Redux() {


  const dispatch = useDispatch()
  const name = useSelector(state => state)

    const handlerPlus = () =>{
      dispatch({
        type: 'plus',
        payload: 5
      
      })
    }

    const handlerMinus = () =>{
      dispatch({
        type: 'minus',
      
      })
    }

  return (
    <div>
       <div>
        {name} 
      </div>
      <button onClick={handlerPlus}> 
        +
      </button>
      <button onClick={handlerMinus}> 
        -
      </button>

      <Reset/>
    </div>
   
  );
}

export default Redux;
