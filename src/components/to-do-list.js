import ToDo from "./to-do";

function TodoList({toDos, setToDos, filteredToDos}){

    return(
      <div className="todo-container">
        <ul className="todo-list">
        {filteredToDos.map(toDo => (
            <ToDo key={toDo.id} 
            setToDos={setToDos} 
            toDos={toDos}
            toDo = {toDo}
            listItemName={toDo.text} />
        ))}
        </ul>
      </div>
    );
}

export default TodoList;