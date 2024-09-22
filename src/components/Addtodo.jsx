import { useContext, useRef, useState } from "react";
import { GrTableAdd } from "react-icons/gr";
import { TodoitemsContext } from "../store/todo-items-store";

function Addtodo() {
  const {addNewitem}=  useContext(TodoitemsContext)

  const addNameElement = useRef();
  const dueDateElement = useRef();

  let handleAddButtonClicked = (event) => {
    event.preventDefault();
    const addName = addNameElement.current.value;
    const addDueDate = dueDateElement.current.value;
    addNameElement.current.value=""
    dueDateElement.current.value=""
    addNewitem(addName, addDueDate);
 ;
  };
  return (
    <div className="container ">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={addNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button ">
            <GrTableAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Addtodo;
