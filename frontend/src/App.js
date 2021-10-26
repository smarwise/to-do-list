import './App.css';
import Form from './components/form'
import TodoList from './components/to-do-list';
import {useEffect, useState} from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredToDos, setFilteredTodos] = useState([]);

  //filter toDos everytime there is a change in toDos or status elements
  useEffect(() => {
   filterHandler();
  
  }, [toDos, status]);

  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(toDos.filter(toDo => toDo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(toDos.filter(toDo => toDo.completed === false));
          break;
        default:
          setFilteredTodos(toDos);
          break;
    }
  }

  return (
    <div className="App">
      <header>
      <h1> Simbiso's To-Do List</h1>
      </header>
      <Form toDos={toDos}
       setToDos={setToDos} 
       setInputText={setInputText} 
       inputText={inputText}
       setStatus={setStatus}/>
      <TodoList toDos={toDos} 
      setToDos={setToDos}
      setFilteredTodos={setToDos}
      filteredToDos={filteredToDos}
      setFilteredTodos={setFilteredTodos}/>
    </div>
  );
}

export default App;
