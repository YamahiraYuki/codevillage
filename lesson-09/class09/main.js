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
            posX -= imageSize * 0.4
            break;
        case 38:
            console.log("↑")
            posY -= imageSize * 0.4
            break;
        case 39:
            console.log("→")
            posX += imageSize * 0.4
            break;
        case 40:
            console.log("↓")
            posY += imageSize * 0.4
            break;
        default:
            break;
    }
})


//イメージの調整
const imageSize = 50
var imageView = document.getElementById("image")
var posX = 0
var posY = 0
imageView.style.width = imageSize + "px"
imageView.style.height = imageSize + "px"
imageView.style.position = "absolute"
imageView.style.left = posX
imageView.style.top = posY

addEventListener("keydown", evetnInfo => {
    console.log(evetnInfo.keyCode)

    switch (evetnInfo.keyCode) {
        case 37:
            console.log("←")
            posX -= imageSize * 0.4
            break;
        case 38:
            console.log("↑")
            posY -= imageSize * 0.4
            break;
        case 39:
            console.log("→")
            posX += imageSize * 0.4
            break;
        case 40:
            console.log("↓")
            posY += imageSize * 0.4
            break;
        default:
            break;
    }
    imageView.style.left = posX + "px"
    imageView.style.top = posY + "px"
})

var addButton = document.getElementById("addButton")
addButton.addEventListener("click", eventInfo => {
    var rootElement = document.getElementById("root")
    var newItem = document.createElement("img")
    newItem.src = "illust.png"
    newItem.style.width = imageSize + "px"
    newItem.style.height = imageSize + "px"
    newItem.id = "image2"
    newItem.style.position = "absolute"
    rootElement.appendChild(newItem)
})

var removeButton = document.getElementById("removeButton")
removeButton.addEventListener("click", eventInfo => {
    var rootElement = document.getElementById("root")
    var removeItem = document.getElementById("image2")
    if (removeItem) {
        rootElement.removeChild(removeItem)
    }
})

