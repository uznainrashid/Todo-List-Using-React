import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoitemsContext } from "../store/todo-items-store";
function Todoitem({ todoName, dueDate}) {
  const {deleteItem}=useContext(TodoitemsContext)
  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4"> {dueDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => deleteItem(todoName)}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitem;
