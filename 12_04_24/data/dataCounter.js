// import { renderCounter } from "../componets/renderCounter.js"

export const data = {
	title: 'Counter',
	count: 0
}

// setInterval(function() {
// 	data.count++
// 	console.log(data.count)

// 	//UI Update
// 	renderCounter(data)
// }, 1000)

let changeDataCallBack = function(){
	alert('Template')
}

export function setChangeDataCallBack(newCallBack){
	changeDataCallBack = newCallBack
}

export function inreaseCount () {
	data.count++
	// renderCounter()
	changeDataCallBack()
}
export function decreaseCount () {
	data.count--
	// renderCounter()
	changeDataCallBack()
}