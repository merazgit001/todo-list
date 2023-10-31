(function(){
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const taskCounter = document.createElement('span');
    taskCounter.textContent = `Task : 0`;
    listContainer.appendChild(taskCounter);

    function addTask(text){
        const li = document.createElement('li');
        li.textContent= text;
        listContainer.appendChild(li);

        let deleteButton = document.createElement('span');
        deleteButton.textContent = '\u00d7';
        li.appendChild(deleteButton);

        taskCounter.textContent = `Task : ${listContainer.querySelectorAll("li").length}`;
    }
    function handleInputKeypress(e){
        if (e.key === 'Enter'){
            const text = inputBox.value.trim();
            if (!text){
                alert("Add Task Section cannot be Empty!");
                return;
            }
            addTask(text);
            inputBox.value = "";
        }
    }
    
    listContainer.addEventListener('click',function(e){
        if (e.target.tagName === "LI"){
            e.target.classList.toggle('checked');
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            taskCounter.textContent = `Task: ${listContainer.querySelectorAll('li').length}`;
        }
    },false);
    // --------------------------------------animation
    const box = document.querySelector(".box");
    const divs = [];

    for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.style.height = "60px";
    div.style.width = "60px";
    div.style.position = "absolute";
    div.style.backgroundColor = "inherit";
    div.style.border = "6px solid white";
    div.style.boxShadow = "0px 0px 4px 2px rgba(231, 229, 229, 0.8)";

    div.style.top = Math.floor(Math.random() * 100) + "%";
    div.style.left = Math.floor(Math.random() * 100) + "%";

    divs.push(div);
    box.appendChild(div);
    }

    // const animate = () => {
    // divs.forEach((div) => {
    //     div.classList.add("animated", "bounceIn");
    //     setTimeout(() => {
    //     div.classList.remove("animated", "bounceIn");
    //     div.classList.add("animated", "zoomIn");
    //     setTimeout(() => {
    //         div.classList.remove("animated", "zoomIn");
    //     }, 1000);
    //     }, 1000);
    // });
    // }

    // setInterval(animate, 2000);
    
    function intializeApp(){
        inputBox.addEventListener('keyup', handleInputKeypress);    
    }

    intializeApp();

})()




// const taskCounter = document.createElement('span');
// taskCounter.textContent = 'Task Counter: 0';
// listContainer.appendChild(taskCounter);

// function addTask(text){
//     const li = document.createElement('li');
//     li.textContent= text;
//     listContainer.appendChild(li);

//     let deleteButton = document.createElement('span');
//     deleteButton.textContent = '\u00d7';
//     li.appendChild(deleteButton);

//     // Update the task counter
//     taskCounter.textContent = `Task Counter: ${listContainer.querySelectorAll('li').length}`;
// }

// function handleInputKeypress(e){
//     if (e.key === 'Enter'){
//         const text = inputBox.value.trim();
//         if (!text){
//             alert("Add Task Section cannot be Empty!");
//             return;
//         }
//         addTask(text);
//         inputBox.value = "";
//         saveData()
//     }
// }

// listContainer.addEventListener('click',function(e){
//     if (e.target.tagName === "LI"){
//         e.target.classList.toggle('checked');
//         saveData()
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         taskCounter.textContent = `Task Counter: ${listContainer.querySelectorAll('li').length}`;
//         saveData()
//     }
// },false);

// // function saveData(){
// //     // Save the task counter to local storage
// //     localStorage.setItem('taskCounter', taskCounter.innerText);
// // }
// // if (localStorage.getItem('taskCounter')){
// //     taskCounter.textContent = localStorage.getItem('taskCounter');
// // }


// inputBox.addEventListener('keyup', handleInputKeypress);
