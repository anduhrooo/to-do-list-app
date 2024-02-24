const liEl = document.querySelector('.toDoList');
const list = [];

function addItems() {
    let addMore = confirm(`do you want to add anything to your to do list?`);
    while(addMore) {
        const toDo = prompt(`what do you need to do?`)
        if (!toDo) {
            break
        }
        const dueBy = prompt(`when do you need it done by?`)
        if (!dueBy) {
            break
        }
        const item = {
            toDo,
            dueBy
        }
        list.push(item)
        const allDone = confirm(`do you want to add anything else?`)
        if (!allDone) {
            break 
        } 
    }
return list
}
    
addItems()

console.log(list)

