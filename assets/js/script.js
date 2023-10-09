
   // TO-DO List JS CODE

function currentDateAndTime(){
    var dateOutput = document.getElementById("date");
 var date = new Date();
 const n = date.toDateString();
 const time = date.toLocaleTimeString();
 dateOutput.innerHTML=`${n} <br> ${time}`;

  setInterval('currentDateAndTime()',1000)
 }
 currentDateAndTime();
 
 //  CheckBox Functionality

// var checks = document.querySelector('.check');
// var tests = document.querySelector('.test');

// checks.addEventListener('click', ()=>{
//     if(checks.checked){
//         tests.classList.add('strikeThrough');
//     }
//    else{
//         tests.classList.remove('strikeThrough');
//     }
// });

var taskIdCounter = 0;
   
   // Create Element Functinality

   var newTask = document.getElementById('newTask');
   newTask.addEventListener('click', ()=>{
    
    var background = document.getElementById("banner");
    let item = document.createElement('div');
    item.className = "list";
    item.dataset.taskId = taskIdCounter++; // Assign a unique task ID


    let tickBox = document.createElement('input');
    tickBox.setAttribute('type','checkbox');
    tickBox.className = 'check';

    let h1 = document.createElement('h1');
    h1.className = 'test';
    h1.innerHTML = "ADD NEW TASK";

    let buttonDiv = document.createElement('div');
    buttonDiv.className='btnHolder';

    let editBtn = document.createElement('button');
    editBtn.className = 'pen';
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'trash';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    buttonDiv.append(editBtn,deleteBtn);
    item.append(tickBox,h1,buttonDiv);
    background.appendChild(item);

    editBtn.addEventListener('click',()=>{
        if(h1.contentEditable === "true"){
            h1.contentEditable = 'false';
            editBtn.innerHTML = "<i class='fa-solid fa-pen'></i>";
        }
        else{
            h1.contentEditable = 'true';
            editBtn.innerHTML = "<i class='fa-solid fa-circle-check fa-beat'></i>";
        }
       
    });

    deleteBtn.addEventListener('click',()=>{
        if(confirm("Do you want to Delete the task?")){
            item.remove();
        }  
    });

    // Function to add the strike-through effect when a checkbox is checked

    tickBox.addEventListener('change', () => {
    let task = document.querySelector(`[data-task-id="${item.dataset.taskId}"]`);
    let checkbox = task.querySelector('.check');
    let text = task.querySelector('.test');
    
    if (checkbox.checked) {
        text.classList.add('strikeThrough');
    } else {
        text.classList.remove('strikeThrough');
    }
    });

});
    








