import { openAddNewTaskDialog } from "../../data/data.js"
import { Button } from "../common/Button/Button.js"
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js"
import { Header } from "./Header/Header.js"
import { Taskslist } from "./Tasklist/Taskslist.js"

export function Todolist (todolistData) {
	const container = document.createElement("div")
	const headerElement = Header(todolistData.todolist.title)
	const taskslistElement = Taskslist(todolistData.todolist.tasks)
	const addBtnElement = Button("+", openAddNewTaskDialog)
	const addNewDialogElement = AddNewTaskDialog()

	container.append(
		headerElement,
		taskslistElement,
		addBtnElement, 
		addNewDialogElement
	)
	return container
}
