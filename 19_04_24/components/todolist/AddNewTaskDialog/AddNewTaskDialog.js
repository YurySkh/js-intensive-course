import { Button } from "../../common/Button/Button.js"
import { addTasc, closeAddNewTaskDialog, data } from "../../../data/data.js"

export function AddNewTaskDialog() {
	const container = document.createElement("dialog")
	container.open = data.todolist.addNewTaskDialog.isOpen

	const inputElement = document.createElement("input")
	const saveBtnElement = Button("save", () => {
		addTasc(inputElement.value)
		closeAddNewTaskDialog()
	}
)
	const cancelBtnElement = Button("cancel", closeAddNewTaskDialog)


	container.append(
	inputElement,
	saveBtnElement,
	cancelBtnElement
	)

	return container
}
