const input = document.querySelector('#input-box');
const addBtn = document.querySelector('#add-btn');
const tasks = document.querySelector('.list-container');

// input.addEventListener('keyup', () => {
//     if (input.value.trim() !== 0) {
//         addBtn.classList.add('active')
//     } else {
//         addBtn.classList.remove('active')
//     }
// })
{/* <i class="fa-solid fa-xmark" id="edit"></i> */}
{/* <i class="fa-solid fa-pen-to-square" id="close"></i> */}

addBtn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Plz type something')
    } else {
        let newItem = document.createElement('li');
        newItem.innerHTML = `<p> ${input.value}</p>
        <div class="item-btn">
            
            <button id='close'>X</button>
        </div>`
        tasks.appendChild(newItem);
    }
    input.value = '';
});

tasks.addEventListener('click', (e)=>{
    if(e.target.value === 'X'){
        e.target.parentElement.remove();
    } else if (e.target.idName === 'edit'){
    }
})