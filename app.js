const input = document.querySelector('.add-task');
const addBtn = document.querySelector('.add-btn');
const tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () => {
    if(input.value.trim() !== 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p> ${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
    }
})