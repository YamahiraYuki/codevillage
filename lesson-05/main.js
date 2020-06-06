var car0 = { bodyColor: "#FFF098", tire: "YOKOHAMA", maker: "TOYOTA", age: 2, windowStatus: [1.0, 0.6, 0.2, 0.0] }　//オブジェクト
var car1 = { bodyColor: "#FBF098", tire: "DUNLOP", maker: "MATUDA", age: 6 }　//オブジェクト
var car2 = { bodyColor: "#FFF198", tire: "Michelin", maker: "SUZUKI", age: 15 }　//オブジェクト

console.log(car0.bodyColor)
console.log(car0.tire)
console.log(car0.maker)
console.log(car0.age)

var carArray = [car0, car1, car2]

for (car of carArray) {
    console.log(car)
    console.log(car["tire"])
}

console.log(car0["windowStatus"][1])


car0.maker = "FUJI"  //書き換え
car0.lightStatus = "ture" //新規プロパティ追加
console.log(car0)

//JSON
var jsonStr = `{ "bodyColor": "#FFF098", "tire": "YOKOHAMA", "maker": "TOYOTA", "age": 2, "windowStatus": [1.0, 0.6, 0.2, 0.0] }`
//変換してObject化する
var jsonObj = JSON.parse(jsonStr)
console.log(jsonObj)
console.log(jsonObj)
