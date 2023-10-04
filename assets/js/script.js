 function currentDateAndTime(){
    var dateOutput = document.getElementById("date");
 var date = new Date();
 const n = date.toDateString();
 const time = date.toLocaleTimeString();
 dateOutput.innerHTML=`${n} <br> ${time}`;

  setInterval('currentDateAndTime()',1000)
 }
 currentDateAndTime();
 
 
var check = document.getElementById('check');
var test = document.getElementById('test');

check.addEventListener('click', ()=>{
    if(check.checked){
        test.classList.add('strikeThrough');
    }
    if(!check.checked){
        test.classList.remove('strikeThrough');
    }
});
   
   
 
