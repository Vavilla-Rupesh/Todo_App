function task(title,dueDate,dueTime,description){
            this.title = title;
            this.dueDate = dueDate;
            this.dueTime = dueTime;
            this.description = description;
        }
        var todoList = [];
        function addTasks(){
            var title = document.getElementById('todo-input').value;
            var dueDate = document.getElementById('todo-date').value;
            var dueTime = document.getElementById('todo-time').value;
            var description = document.getElementById('todo-description').value;
            var newTask = new task(title,dueDate,dueTime,description);
            todoList.push(newTask);
            displayTasks();
        }
        function delTasks(title){
            var index = todoList.findIndex(x => x.title === title);
            if(index !== -1) {
                todoList.splice(index, 1);
            }
            displayTasks();
        }
        function displayTasks(){
            var html = '';
            for(var i = 0; i < todoList.length; i++){
                html += `<div class="task-container">
                    <div class="todo-title">${todoList[i].title}</div>
                    <div class="todo-date">${todoList[i].dueDate}</div>
                    <div class="todo-time">${todoList[i].dueTime}</div>
                    <div class="todo-description">${todoList[i].description}</div>
                    <div class="todo-delete"><button onclick="delTasks('${todoList[i].title}')" style="margin-left:100px" id="delete"><img src="./delete-vector-icon.png" width="25px" height="25px"/></button></div>
                </div>`;
            }
            document.getElementById('todo-list').innerHTML = html;
        }