let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList =[]
addButton.addEventListener("click",addTask)

function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    console.log(taskList);
    render();
}

function render() {
    let resultHTML = '';
    for(let i=0;i<taskList.length;i++){
        resultHTML += `<div class="book"> 
        <div> ${taskList[i]}</div>
        <div> 
            <button>send</button>
            <button>delete</button>
        </div>
    </div>`;
    }

    document.getElementById("book-board").innerHTML = resultHTML; 
}