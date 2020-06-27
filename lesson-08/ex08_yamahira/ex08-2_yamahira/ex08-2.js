var DOM = document.createElement("h1")
DOM.textContent = "DOM"
document.body.appendChild(DOM)

var HfromJ = document.createElement("p")
HfromJ.textContent = "JavaScriptからHTMLを扱うための仕組み"
document.body.appendChild(HfromJ)

var topic = document.createElement("h2")
topic.textContent = "印象に残っているトピック"
document.body.appendChild(topic)

var listView = document.createElement("ul")
document.body.appendChild(listView)

var object = document.createElement("li")
object.textContent = "documentオブジェクト"
listView.appendChild(object)

var byId = document.createElement("li")
byId.textContent = "getElementById"
listView.appendChild(byId)

var listener = document.createElement("li")
listener.textContent = "イベントリスナ"
listView.appendChild(listener)

