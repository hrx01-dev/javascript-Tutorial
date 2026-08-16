// Events in js
// The Events are the actions that happen in the webpage , like clicking on a button , typing in a input field etc  
let btn = document.querySelector("#btn")
// console.log(btn)
btn.onclick = () => {
    console.log("button clicked")
}
btn.ondblclick = () => {
    console.log("button double clicked")
}
btn.onmouseover = () => {
    console.log("button hovered")
}
btn.onmouseout = () => {
    console.log("button unhovered")
}

let box = document.querySelector("#box")
box.onmouseover = (evt) => {
    console.log("You are inside the box")
    box.style.backgroundColor = "green"
    console.log(evt)
    console.log(evt.type); // type of event for this , mouseover
    console.log(evt.target); // type of target for this , div
}
// Event object
// These are the object that is used to give specific info about the event 
// ex: key , mouse , keyboard

// Event Listeners
let btn2 = document.querySelector("#btn2")
const btn3 = () => {
    console.log("button 2 clicked")
}
btn2.addEventListener("click", btn3)

btn2.removeEventListener("click", btn3)

