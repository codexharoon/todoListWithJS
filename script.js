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
    
    for(let i=0; i<todos.length; i++){

        todoHTML+=`
                <div>${todos[i].name}</div>
                <div>${todos[i].date}</div>
                <button class="delete-btn" onclick="
                    todos.splice(${i},1);
                    printTodo();
                ">Delete</button>
        `;
    }

    document.querySelector('.todo-list').innerHTML = todoHTML;
    todoHTML = '';
}