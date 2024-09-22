import { useReducer } from "react";
import { createContext } from "react"



export const TodoitemsContext = createContext({
    todoitems: [],
    addNewitem: ()=>{},
    deleteItem: ()=>{}
  })
  const todoItemReduce = (currTodo, action) => {
    let newTodoitems= currTodo;
    if (action.type === "New_item") {
       newTodoitems= [
        ...currTodo,
        {
          name: action.payload.itemName,
          itemdueDate: action.payload.itemdueDate,
        },
      ];
    } else if (action.type === "Delete_item") {
      newTodoitems = currTodo.filter(
        (item) => item.name !== action.playload.todoItemName
      );
    }
    return newTodoitems;
  };

  const TodoContextProvider = ({children})=>{
    const [todoitems, dispatchTodoitem] = useReducer(todoItemReduce, []);
  
    const addNewitem = (itemName, itemdueDate) => {
      const newItemsAction = {
        type: "New_item",
        payload: {
          itemName,
          itemdueDate,
        },
      };
      dispatchTodoitem(newItemsAction);
    };
    const deleteItem = (todoItemName) => {
      const deleteItemtodo = {
        type: "Delete_item",
        playload: {
          todoItemName,
        },
      };
      dispatchTodoitem(deleteItemtodo);
    };
    return (
      <TodoitemsContext.Provider
      value={{
        todoitems: todoitems,
        addNewitem: addNewitem,
        deleteItem: deleteItem,
      }}
      children={children}
    ></TodoitemsContext.Provider>
    )

  }



  export default TodoContextProvider