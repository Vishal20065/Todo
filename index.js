// function AddTodo(event){
//     event.preventDefault();
function AddTodo(){
    var Todocontent=document.getElementById('inputbox');
    var Todolist=document.getElementById('todolist');
    if(Todocontent.value.trim()!==''){
        var li=document.createElement('li');
       
       //adding check box for showing read and unread message
       var readcheckbox=document.createElement('input');
      readcheckbox.type='checkbox';
      readcheckbox.className='read-checkbox';
      readcheckbox.addEventListener('change',function(){
        li.classList.toggle('unread',!readcheckbox.checked);
        li.classList.toggle('complete',readcheckbox.checked);
     // Update Incomplete task
        updateIncompleteCount();
      })

    
       // add check box
   li.appendChild(readcheckbox);
   var textSpan = document.createElement('span');
   textSpan.textContent = Todocontent.value;

   // Append text content to li
   li.appendChild(textSpan);
//    li.textContent= Todocontent.value;
        console.log(Todocontent.value)
    var deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.onclick = function () {
      Todolist.removeChild(li);
      updateIncompleteCount();
    };

   
    
    // Append delete button to list item
    li.appendChild(deleteBtn);
    
    // Append todo
    Todolist.appendChild(li);
    //Clear the input box
    Todocontent.value = '';
    updateIncompleteCount();
}
}
function updateIncompleteCount(){
    var incompleteTasks = document.querySelectorAll('#todolist li.unread').length;
    document.getElementById('incompleteCount').textContent = incompleteTasks;
}
function All(){
    var Items=document.querySelectorAll('#todolist li');
    Items.forEach(item=>item.style.display='block');
}
function Complete(){
    var items=document.querySelectorAll('#todolist li');
    items.forEach(item=>{
        if(item.classList.contains('complete')){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    }
        )
}
function Incomplete(){
    var items=document.querySelectorAll('#todolist li');
    items.forEach(item=>{
        if(!item.classList.contains('complete')){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}

function updateIncompleteCount(){
    var totalTasks = document.querySelectorAll('#todolist li').length;
    var completeTasks = document.querySelectorAll('#todolist li.complete').length;
    var incompleteTasks=totalTasks-completeTasks;
    document.getElementById('incompleteCount').textContent = incompleteTasks;
}
updateIncompleteCount();