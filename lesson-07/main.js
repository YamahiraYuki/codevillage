var str = "AbCdEf"; //Stringクラス// 
const lowerStr = str.toLowerCase();
console.log(lowerStr);
const upperStr = str.toUpperCase();
console.log(upperStr);

//静的メソッド・・インスタンス化しなくても使えるメソッド
//インスタンス化していないのでプロパティの値が使えないという制限はある
// static メソッド名(){
//     return 値
// }　

//継承・上書き：クラスの一部の追加・変更・上書き

//ポリモーフィズム：継承したクラス・異なるクラスでも同じ名前のメソッドを使える
//同じ名前のメソッドだがそれぞれの動き方は異なる

//カプセル化：情報隠蔽・プロテクトすることで中身の処理を保証する

// ------------------------

//クラスの作成
class MyCar {
    //初期化(constructor)
    constructor(color) {
        //変数の宣言はここで↓
        this.myPosition = 0;
        this.bodyColor = color;
    }

    //メソッドの作成
    goForward(loc) {
        this.myPosition += loc;
        console.log("現在地" + this.myPosition);
    }
    myColor() {
        console.log("ボディカラー" + this.bodyColor);
    }
}

// var objCar = new MyCar("orange"); //インスタンス化
// objCar.goForward(20);
// objCar.goForward(25);
// objCar.myColor();

//新しいクラスの作成 継承(extends)を利用した
class PatrolCar extends MyCar {
    playSiren() {
        //Audio Class
        var audio = new Audio("patrol-car1.mp3");
        audio.play();
    }
}

var patCar = new PatrolCar("mono");

//HTMLのbuttonとリンクさせる
function play() {
    patCar.playSiren();
    patCar.goForward(50);
    patCar.myColor();
}

//クラスに追加機能をつけたい super
class PatrolCar extends MyCar {
    constructor() {
        super("mono");
        this.patLump = 10;
    }
}