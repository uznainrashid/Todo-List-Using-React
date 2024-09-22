import { useContext } from "react";
import { TodoitemsContext } from "../store/todo-items-store";
import Todoitem from "./Todoitems";
import styles from "./TodoitemsAll.module.css";

const TodoitemsAll = () => {
  const {todoitems} = useContext(TodoitemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoitems.map((item) => (
          <Todoitem
            key={item.name}
            todoName={item.name}
            dueDate={item.duedate}
           
          />
        ))}
      </div>
    </>
  );
};
export default TodoitemsAll;
