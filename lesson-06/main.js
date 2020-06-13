// コールバック関数:何かが終わった時に呼ばれる(API，SDKの処理が終わったら呼ばれる）


// 似てるけど厳密には違うもの・・ハンドラ，デリゲートメソッド

// 

var array = ["a", "b", "c", "d"]


//curValueを受け取って，curValueをコンソールに出力する関数
var callback = (curValue, index) => {
    console.log(curValue)
    console.log(index)
}
//一つずつ取り出して，処理する関数（コールバック関数）を引数にする
array.forEach(callback)


//forEachを自分で作ってみる
function forEach2(callback) {
    for (value of array) {
        callback(value)
    }
}
//または
function forEach3(callback) {
    for (index in array) {
        callback(array[index], index)
    }
}

forEach2(callback)
forEach3(callback)


//高階関数map　配列の値を1つずつ取り出して，それをcallback関数で処理して，出てきた値を新しい配列に入れる

var callback = (curValue, index) => {
    return curValue + "のインデックス値は" + index
}

var resultArray = array.map(callback)
console.log(resultArray)

//mapを自分で作ってみる

function map2(callback) {
    var resultArray2 = []
    for (index in array) {
        result = callback(array[index], index)
        resultArray2.push(result)
    }
    return resultArray2
}

var resultArray = map2(callback)
console.log(resultArray)