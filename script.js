let tasks=[]
function getTask(){
    const taskInput=document.querySelector("#task-input")
    const taskText=taskInput.value.trim()

    if (taskInput!='') {
        tasks.push(taskText);
        console.log(taskText)
        taskInput.value=''
        showingTask()
    }
}
function showingTask(){
    const taskContainer=document.querySelector(".task-container")
    taskContainer.innerHTML=''
    
    tasks.forEach((newtask,index)=>{
        const taskElement=document.createElement("div");
        taskElement.classList.add('task')
        taskElement.innerHTML=`
        <span>${newtask}</span>
        <button onclick="deleteTask(${index})">
            Delete
        </button>`
        taskContainer.appendChild(taskElement)
    })
}
    function deleteTask(index) {
    tasks.splice(index, 1);
    showingTask();
    }

