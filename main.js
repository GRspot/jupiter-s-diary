let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div")
let taskList =[]
let mod=''
addButton.addEventListener("click",addTask)
console.log(tabs)

for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(event){
        filter(event)
    });
}


function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    console.log(taskList);
    render();
}

function filter(event){
    mod=event.target.id
    console.log("fliter클릭", event.target.id);
    if(mod == "photos")
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