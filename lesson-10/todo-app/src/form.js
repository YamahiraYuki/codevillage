import React from "react";

export const Form = (props) => {

    var textValue = ""
    var [formStatus, setformStatus] = React.useState(false)
    //チャレンジ内容↓
    //submitしたら，inputのテキストが消えるようにする！！！
    return (
        //JSXを記載していく
        //"{}"の間にはjavascriptの形でコーディングできる
        <form onSubmit={eventinfo => {
            // submitすると，すぐにリロードされてしまう
            // リロードを防ごう！ eventinfo.preventDefault()
            eventinfo.preventDefault()
            console.log(textValue)
            props.addAction(textValue) //submitを押すことでpropsの中のaddActionを呼び出している
            setformStatus(!formStatus)
            console.log(formStatus)
            {
                if (formStatus) {

                }
            }
        }}>
            <input type="text" onChange={eventInfo => {
                textValue = eventInfo.target.value
                // console.log(textValue)


            }} />

        </form>
    );
}
