var addItem = document.getElementById("add")
var number = 1
var list = document.getElementById("list");

addItem.addEventListener("click", eventInfo => {
    var newItem = document.createElement("li");
    newItem.textContent = "アイテム" + number;
    list.appendChild(newItem);
    number++
})

var removeItem = document.getElementById("remove")

removeItem.addEventListener("click", eventInfo => {
    list.removeChild(list.lastChild)
})

