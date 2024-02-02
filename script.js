const addTodo = document.querySelector('.add-todo')
const todoList = document.querySelector('.todo-list')
const message = document.querySelector('.message')
const searchForm = document.querySelector('.search')

function updateMessage() {
	message.innerHTML = `You have ${todoList.children.length} pending task!`
}
updateMessage()

searchForm.addEventListener("keyup", (event) => {
	searchInput = event.target.value.trim();
	Array.from(todoList.children).filter((todo) => {
		return !todo.innerText.toLowerCase().includes(searchInput)
	})
	.forEach((todo) => {
		todo.classList.add("hide")
	})
	Array.from(todoList.children).filter((todo) => {
		return todo.innerText.toLowerCase().includes(searchInput)
	}).forEach((todo) => {
		todo.classList.remove("hide")
	})
})


searchForm.addEventListener('click', (event) => {
    if (event.target.classList.contains("search-todo")) {
        searchForm.reset();
    }
})

addTodo.addEventListener('submit', (event) => {
	event.preventDefault()
	const todo = event.target.todo.value.trim()

	if (todo.length) {
		todoList.innerHTML += `<li>
                                <span class="todo">${todo}</span>
                                <i class="fa fa-trash delete"></i>
                            </li>`;
		updateMessage()
	}
	addTodo.reset()
})

todoList.addEventListener('click', (event) => {
	if (event.target.classList.contains('delete')) {
		event.target.parentElement.remove()
		updateMessage()
	}
})

function clearAll() {
	const todoli = todoList.querySelectorAll('li')
	todoli.forEach((todo) => {
		todo.remove()
	})
	updateMessage()
}
