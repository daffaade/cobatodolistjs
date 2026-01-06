// get element tiap todo
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// tambah event listener untuk form submit
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah reload halaman
    taskInput.value = taskInput.value.trim(); // menghapus spasi di awal dan akhir
    if (taskInput.value !== '') {
        // buat elemen list baru
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        taskList.appendChild(listItem);
        taskInput.value = ''; // reset input field
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus Tugas';
        deleteBtn.addEventListener('click', function(){
            listItem.remove();
        });
        listItem.appendChild(deleteBtn);
    }
});
