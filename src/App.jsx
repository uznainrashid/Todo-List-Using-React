import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoitemsAll from "./components/TodoitemsAll";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoContextProvider from "./store/todo-items-store";
import "./App.css";


function App() {

  


  return (
  <TodoContextProvider >

      <center className="todo-contianer">
        <Appname />
        <Addtodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoitemsAll></TodoitemsAll>
      </center>

  </TodoContextProvider>
  );
}

export default App;
