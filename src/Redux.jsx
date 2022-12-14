import { useDispatch, useSelector } from "react-redux";
import Delete from "./Delete";

function Redux() {


  const dispatch = useDispatch()
  const name = useSelector(state => state)

    const handlerClick = () =>{
      dispatch({
        type: 'change',
      
      })
    }

  return (
    <div>
       <div>
        something something: {name} 
      </div>
      <button onClick={handlerClick}> 
        click
      </button>
      <Delete/>
    </div>
   
  );
}

export default Redux;
