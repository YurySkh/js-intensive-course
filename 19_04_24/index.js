import { data } from "./data/data.js";
import { Todolist } from "./components/todolist/Todolist.js"
import { subscribe } from "./data/data.js"

export function refreshUI () {
const root = document.getElementById("root")
root.innerHTML = ""
const todolistElement = Todolist(data)
root.append(todolistElement)
}

refreshUI () 
subscribe(refreshUI)
