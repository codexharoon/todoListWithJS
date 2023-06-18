const todos = [];
let todoHTML = '';

function todo(){
    const name = document.querySelector('.todo-name').value;
    const date = document.querySelector('.todo-date').value;

    const todo = {
        name: String(name),
        date: String(date)
    }

    if(name && date ){
        todos.push(todo);
        document.querySelector('.todo-name').value = '';
        document.querySelector('.todo-date').value = '';

        printTodo();
    }
}


function printTodo(){

    todos.forEach(function(todoObj,i){
        todoHTML+=`
                <div>${todoObj.name}</div>
                <div>${todoObj.date}</div>
                <button class="todo-delete delete-btn">
                    Delete
                </button>
        `;
    })

    document.querySelector('.todo-list').innerHTML = todoHTML;
    todoHTML = '';
    
    document.querySelectorAll('.todo-delete').forEach( (delBtn,i)=> {
    
        delBtn.addEventListener('click', ()=>{
            todos.splice(i,1);
            printTodo();
        })
    
    });
}


const addBtnElement = document.querySelector('.todo-add');
addBtnElement.addEventListener('click',todo);

