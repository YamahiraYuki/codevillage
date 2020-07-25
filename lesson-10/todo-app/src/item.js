import React from 'react';

export const Item = (props) => {
    const [todoStatus, setTodoStatus] = React.useState(false) //分割代入して配列を返す
    return (
        <li>

            <input type='checkbox' onChange={eventInfo => {
                setTodoStatus(!todoStatus)
            }} />
            {/* 三項演算子という書き方 */}
            {/* 条件式 ? Trueの時の値 : Falseの時の値 */}
            <span style={{ textDecoration: todoStatus ? "line-through" : "none" }}>
                {props.todoObject.title}
            </span>
        </li>
    );
}