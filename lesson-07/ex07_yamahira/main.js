//課題０７−１　文字列オブジェクトで使えるメソッド
const str1 = "今日の天気は雨です．";
const str2 = "傘を持ってきました．";
console.log(str1.charAt(3));                //charAt()
console.log(str1.concat("なので", str2));    //concat()
console.log(str1.includes("晴れ"));         //includes()

//課題０７−２　配列オブジェクトで使えるメソッド
var array1 = ["りんご", "バナナ", "スイカ", "メロン", "マンゴー"];
console.log(array1.fill("パイン", 2, 4));   //fill()

var array1 = ["りんご", "バナナ", "スイカ", "メロン", "マンゴー"];
console.log(array1.shift());            //shift()
console.log(array1);

var array1 = ["りんご", "バナナ", "スイカ", "メロン", "マンゴー"];
console.log(array1.copyWithin(-3, 1, -1));     //copyWithin()

//文字列オブジェクトで使えるメソッドと配列オブジェクトで使えるメソッドの共通点・相違点
//共通点：内容の書き換え，追加や検索ができる
//相違点：配列オブジェクトにはインデックス番号が存在し，それを使うことができる

//課題０７−３
class MyShoes {
    // 初期化
    constructor(number, maker, color, size) {
        // 変数の宣言はここで行う↓
        this.myNumber = number;
        this.myMaker = maker;
        this.myColor = color;
        this.mySize = size;
    }

    // メソッドの作成
    getNumber() {
        console.log("シリアルナンバー：" + this.myNumber);
    }
    getMaker() {
        console.log("メーカー：" + this.myMaker);
    }
    getColor() {
        console.log("カラー：" + this.myColor);
    }
    getSize() {
        console.log("サイズ：" + this.mySize);
    }
}

// 継承した新しいクラス
class HighHeels extends MyShoes {
    constructor(number, maker, color, size, heelHeight) {
        super();
        this.myNumber = number;
        this.myMaker = maker;
        this.myColor = color;
        this.mySize = size;
        this.myHeelHeight = heelHeight;
    }
    //新しいクラスのメソッドの作成
    getHeelHeight() {
        console.log("ヒールの高さ：" + this.myHeelHeight);
    }
}

var objShoes = new MyShoes("0000012", "Nike", "blue", "27.0");
objShoes.getNumber();
objShoes.getMaker();
objShoes.getColor();
objShoes.getSize();

var objHighHeel = new HighHeels("0000145", "Christian Louboutin", "pink", "22.0", "5.0cm");
objHighHeel.getNumber();
objHighHeel.getMaker();
objHighHeel.getColor();
objHighHeel.getSize();
objHighHeel.getHeelHeight();
