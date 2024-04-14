import { decreaseCount, inreaseCount } from "../data/dataCounter.js"
import { Button } from "./button/Button.js"
import { Header } from "./header/Header.js"
import { Value } from "./value/Value.js"

export function renderCounter() {
	//Clear page content
	document.body.innerText = ''

	// Header
    const header = Header()

	// Value
     const value = Value()	
	  
	 // Button
	 const buttonInc = Button('inc', inreaseCount)
	 const buttonDec = Button('dec', decreaseCount)


	//render
	document.body.append(
		header,
		value, 
		buttonInc,
		buttonDec
	)
}