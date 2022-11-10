let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputtext = document.getElementById('inputtext');
let clearToDo = document.getElementById('clearToDo')

addToDoButton.addEventListener('click',function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    ToDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputtext.value;
    inputtext.value = "";

    paragraph.addEventListener('click',function () {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraph)
    });

    clearToDo.addEventListener('click',function(){
        paragraph.remove ();
    })

})