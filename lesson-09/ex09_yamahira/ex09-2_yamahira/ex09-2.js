var addItem = document.getElementById("add")
var number = 1
var list = document.getElementById("list");

addItem.addEventListener("click", eventInfo => {
    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newSpan = document.createElement("span");

    newItem.textContent = "アイテム" + number;
    newImg.src = "http://placehold.it/64x6"
    newImg.alt = "アイテム" + number;
    newSpan.textContent = "アイテム" + number;
    list.appendChild(newItem);
    newItem.appendChild(newImg);
    newItem.appendChild(newSpan);
    number++
})

var removeItem = document.getElementById("remove")

removeItem.addEventListener("click", eventInfo => {
    list.removeChild(list.lastChild)
})

