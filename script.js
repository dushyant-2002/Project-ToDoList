const inp = document.querySelector('#taskinp');
const add = document.querySelector('#btn');
const ul = document.querySelector("ul");

inp.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      addTask().then(() => {
        const checkboxes = document.querySelectorAll('#checkbox');
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', handleCheckboxChange);
        });
        const del = document.querySelectorAll('#delete');
        del.forEach((deleteItem)=>{
            deleteItem.addEventListener('click',deleteTask);
        })
      });
    }
  });
add.addEventListener('click',()=>{
    addTask().then(() => {
        const checkboxes = document.querySelectorAll('#checkbox');
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', handleCheckboxChange);
        });
        const del = document.querySelectorAll('#delete');
        del.forEach((deleteItem)=>{
            deleteItem.addEventListener('click',deleteTask);
        })
      });
});
function addTask(){
    if(inp.value != ""){
    return new Promise((resolve,reject)=>{
        const list = document.createElement('li');
        list.style.backgroundColor=getRandomColor();
        list.innerHTML = `<div class="task">
    <input type="checkbox" id="checkbox">
    <p >${inp.value}</p></div>
<div class="icons">
<span class="material-symbols-outlined">
    arrow_upward
    </span>
    <span class="material-symbols-outlined" id="delete">
        delete
        </span>
<span class="material-symbols-outlined">
    arrow_downward
    </span>
</div>`;
ul.append(list);
inp.value="";
        resolve();
    })
}
}
function handleCheckboxChange(event) {
  const checkbox = event.target;
  const listItem = checkbox.closest('li');
  const paragraph = listItem.querySelector('p');
  paragraph.textContent = 'Completed';
  paragraph.style.fontSize = '1.3rem';
  listItem.style.backgroundColor = 'lightGreen';
  setTimeout(()=>{

    if (checkbox.checked) {
        // Do something when the checkbox is checked
        listItem.classList.add('completed');
      } else {
        // Do something when the checkbox is unchecked
        listItem.classList.remove('completed');
      }
  },500);
}
function deleteTask(event){
    const del = event.target;
    const listItem = del.closest('li');
    const paragraph = listItem.querySelector('p');
    paragraph.innerText = "Deleted";
    listItem.style.backgroundColor = 'Red';
    setTimeout(()=>{
        listItem.classList.add('completed');
    },500);
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }






