//課題06-1
const mul100 = n => n * 100
const subtra5 = n => n - 5
const add3 = n => n + 3
const mul8 = n => n * 8

//n * 100 - 5
const n = 3
console.log(subtra5(mul100(n)))

//(n + 3) * 8 + 3
console.log(add3(mul8(add3(n))))

console.log("================")
//課題06-2(課題06-1.map)
const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => {
    var result = 0
    for (value of item) {
        result += value
    }
    return result
})
console.log(sums) //=> [424, 313, 291, 379]

console.log("================")
//課題06-3 mapを自分で作ってみる
var array = ["a", "b", "c", "d"]
var callback = (curValue, index) => {
    return curValue + "のインデックス値は" + index
}

function map2(callback) {
    var resultArray = []
    for (index in array) {
        result = callback(array[index], index)
        resultArray.push(result)
    }
    return resultArray
}

var resultArray2 = map2(callback)
console.log(resultArray2)