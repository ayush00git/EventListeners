const view1 = document.querySelector("#view1")
view1.style.display = "none"

const view2 = document.querySelector("#view2")
view2.style.display = "flex"

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){                                     // event.target refers to document
        console.log("readystate : completed")
        initApp()                           
    }
})

const initApp = () => {
    const view2 = document.querySelector("#view2")
    const div = view2.querySelector("div")
    const h2 = div.querySelector("h2")

    view2.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "purple"           // view2.style.backgroundColour will also work
    })

    div.addEventListener("click", (event) => {
        event.stopPropagation()
        event.target.style.backgroundColor = "pink"
    })

    h2.addEventListener("click", (event) => {
        event.stopPropagation()
        event.target.textContent = "Clicked"
    })
}

// Event bubbling is seen in these cases, like as we'll click the h2 tag the view and div EventListener will wake up 
// as the click is also being inside them, so the event gets propagated

// stopPropagation() method is used to stop this event bubbling