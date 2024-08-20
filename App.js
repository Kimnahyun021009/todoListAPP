import React, {useState, useEffect} from 'react';
import{useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const[todoInput, setTodoInput] = useState('');
  const[todos, setTodos] = useState([]);
  const[filter, setFillter] = useState('all');

  const getTodos = () => {"Todos": Unknown word.
    const saveTodos=localstrorage.gerItem('todos');
  if(saveTodos){"Todos": Unknown word.}
setTodos()}


useEffect(()=>{getTodos();},[]);
const newTodos = [.... todos,{text:todoInput, completed:false}];
setTodos(newTodos);
localStorage.setItem('todos', JSON.stringify(newTodos));




const removelLocalTodos=(todoRemove)=>{
  const newTodos =todos.filter(todo=> todo.text == todoRemove.text);
  setTodos(newTodos);
  localStorage.setItem('todos', JSON.stringify(newTodos))
};

e.preventDefault();
if(todoInput.trim()==='') return;
saveLocalTodos(todoInput);
setTodoInput('');
}
const filtertodos=()=>{
  switch(filter){
    case 'complated';
    return todos.filter(todo=>todo.completed);
    case 'uncomplete':
      return todos.filter(todo=>!todo.completed);
      default;
      return todos;
  }
}

const deleteTodo=(todoToDelete)=>{ }
    <div className="App">
    <h1> todo List</h1>
    <form>
    <input type="text"
         classname="todo-input"
         onChange={(e)=>setTodoInput(e.target.vlaue)}
         placeholder="할 일을 입력하세요"
         />
         <button type="submit" className="todo-button">
         <i class="fas fa-plus-squaare"></i>
         </button>
    </form>
    <div className="filter-todo">
    <select onChange={(e)=>setFilter(Tode)}>
    <option vllue="all"> 전체 보기</option>
    <option vllue="completed" class=> 실행완료 보기</option>
    <option vllue="uncomplete"> 미실행 보기</option>
    </select>
    </div>
    <div class="todo-list">
          {
            filtertodos().map((todo, index)=>(
              <div className="todo" key={index}>
                  <p className={'todo-item ${todo.complete? 'comolated':''}'}>
                  {todo.text}
                  </p>
                  <button 
                  onClick={()=>deleteTodo()}
                  className="trash-btn">
                  <i className="fas fa-trash"></i>
                  </button>
                  <button
                  onClick={()=>{
                    const updatedTodos=todos.map(t=>
                    text===todo.text? {...t,comolated:!t.complated}:t
                    );
                    setToDos(updatedTodos);
                    localStorage.setItem('todos',JSON,stringify(newTodos))
                  }}
                  className="complated-btn"
                    <i className="fas fa-chack"></i>
                  </button>
              </div>
            ));
          }
    </div>
    </div>



export default App;
