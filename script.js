// First access all the elements
const view1 = document.querySelector("#view1")
console.log(view1)
view1.style.display = "none"

const view = document.querySelector("#view2")
view.style.display = "flex"
const div = view.querySelector("div")
const h2 = div.querySelector("h2")

// syntax -- addEventListener(event, function, useCapture)
doSomething = () => {
    alert("Doing something..")
}

h2.addEventListener("click", doSomething, false)
// flase is by deaulft do you can even ignore writing it
// how to remove the EventListener
h2.removeEventListener("click", doSomething, false)

// using an anonymous function (but remember that removeEventListener function does not works with anonymous fxns)
h2.addEventListener("click", function (textChange) {
    console.log(textChange.target)                         // .target returns h2
    textChange.target.textContent = "Clicked"
})
