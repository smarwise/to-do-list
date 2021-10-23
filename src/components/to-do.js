function ToDo({listItemName, setToDos, toDos, toDo}){
    const deleteHandler = () => {
        setToDos(toDos.filter(el => el.id !== toDo.id))
    };

    const completeHandler = ()  => {
        setToDos(toDos.map((item) => {
            if (item.id === toDo.id)
            {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${toDo.completed ? "completed": ""}`}>{listItemName}</li>
            <button onClick={completeHandler} className='complete-btn'><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className="fas fa-trash"></i></button>
        </div>
    );
}


export default ToDo;