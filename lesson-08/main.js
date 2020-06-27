// スレッド

// CPU利用の単位．様々な作業を並行で行って同時に行われているように見える


// 同期処理と非同期処理

// 同期処理：ユーザーからの入力を待ってから動作する

// 非同期処理；ユーザーからの入力を待たずに動作できる

var textView = document.getElementById("text1"); //<p id="text1">を取り出した
console.log(textView.textContent);

function play() {
    console.log("ボタン１を押した");
}

var button = document.getElementById("button2")
button.addEventListener("click", eventinfo => {
    console.log("ボタン２を押した")
    textView.textContent = "ボタンを押したよ！"
    textView.style.color = "red"
})

//親と子を取り出す

//list1を取り出す
var listView = document.getElementById("list1")
console.log(listView.children[0]);
console.log(listView.children[1]);


//子要素の追加
var addButton = document.getElementById("addButton")
addButton.addEventListener("click", eventinfo => {
    var newItem = document.createElement("li")
    newItem.textContent = "アイテム New"
    listView.appendChild(newItem)
})




//子要素の挿入
var insertButton = document.getElementById("insertButton")
insertButton.addEventListener("click", eventinfo => {
    var lastItem = listView.lastElementChild
    var targetItem = listView.children[0]
    listView.insertBefore(lastItem, targetItem)
})






//子要素の削除
var removeButton = document.getElementById("removeButton")
removeButton.addEventListener("click", eventinfo => {
    var removeItem = listView.lastElementChild
    listView.removeChild(removeItem)
})
