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
        view2.classList.toggle("black")           // view2.style.backgroundColor will also work if you want to set color directly
        view2.classList.toggle("blue")
    })

    div.addEventListener("click", (event) => {
        event.stopPropagation()
        div.classList.toggle("blue")
        div.classList.toggle("black")

    })

    h2.addEventListener("click", (event) => {
        event.stopPropagation()
        const myText = h2.textContent
        myText === "My 2nd View" 
        ? (h2.textContent = "Clicked") : (h2.textContent = "My 2nd View")
    })


const h1 = document.createElement("h1")
const div2 = view2.querySelector("div")
div2.append(h1)

h1.textContent = "Try Now"

h1.addEventListener("click", (event) => {
    event.stopPropagation()
    const myText = h1.textContent
    myText === "Try Now" ? (h1.textContent = "Trying!") : (h1.textContent = "Try Now")
})

const nav = document.querySelector("nav")

nav.addEventListener("mouseover", (event) => {
    nav.classList.add("height100")    
})
nav.addEventListener("mouseout", (event) => {
    nav.classList.remove("height100")
})

const view3 = document.querySelector("#view3")
view2.style.display = "none"
view3.style.display = "flex"

// The problem with the default features in forms is that they reloads the whole webpage when submitted
// in order to prevent this, we'll use the preventDefault() method

const form = view3.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Submitted !")
})

}


// Event bubbling is seen in these cases, like as we'll click the h2 tag the view and div EventListener will wake up 
// as the click is also being inside them, so the event gets propagated

// stopPropagation() method is used to stop this event bubbling