const buttonElement = document.getElementById("button2")
buttonElement.addEventListener("click", evetnInfo => {
    const textView = document.getElementById("text")
    textView.style.color = "#FF00BB"
})

addEventListener("keydown", evetnInfo => {
    console.log(evetnInfo.keyCode)

    switch (evetnInfo.keyCode) {
        case 37:
            console.log("←")
            break;
        case 38:
            console.log("↑")
            break;
        case 39:
            console.log("→")
            break;
        case 40:
            console.log("↓")
            break;
    }
})

