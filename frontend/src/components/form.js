

function Form({setInputText, toDos, setToDos, inputText, setStatus}){
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    //make new to-do with submitted text
    const submitToDoHandler = (e) => {
        e.preventDefault();
        if (inputText.trim() !== "")
        {
            setToDos([
                ...toDos, {text: inputText, completed: false, id: Math.random() * 1000}
            ]);
        }
        setInputText("");
    };

    //change status (all, completed, uncompleted)
    const statusHandler = (e) => {
        setStatus(e.target.value);
        console.log(e.target.value);
    };

    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;