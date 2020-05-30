// else ifを使った場合
function scoring(score) {
    if (score >= 85) {
        return "秀";
    } else if (score >= 60) {
        return "良";
    } else {
        return "不可";
    }
}

//論理式を使った場合
function scoring2(score) {
    if (score >= 85) {
        return "秀";
    }
    if (score < 85 && score >= 60) {
        return "良";
    }
    if (score < 60) {
        return "不可";
    }
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可

console.log(scoring2(100)) //=> 秀
console.log(scoring2(60)) //=> 良
console.log(scoring2(13)) //=> 不可