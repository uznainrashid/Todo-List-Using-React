import { useContext } from "react"
import { TodoitemsContext } from "../store/todo-items-store"
import style from "./WelcomeMessage.module.css"
const WelcomeMessage = ()=>{
   const {todoitems}=  useContext(TodoitemsContext)
    return todoitems.length === 0 && <p className={style.welcome}>Add the Today Work </p>

}
export default WelcomeMessage