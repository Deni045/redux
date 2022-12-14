import { useDispatch } from "react-redux";

function Delete() {

    const dispatch = useDispatch()

    const remove = () =>{
        dispatch({
            type: 'delete'
        })
    }

  return (
    <div>
        <button onClick={remove}>
            delete
        </button>
    </div>
  );
}

export default Delete;