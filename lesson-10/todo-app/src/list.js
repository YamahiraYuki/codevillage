import React from "react";
import { Item } from './item' //ファイルのときは"./"をつけること

export const List = (props) => {
    return (
        <ul>
            {
                props.todoItems.map(todoObj => {
                    return (
                        <Item todoObject={todoObj} key={todoObj.id} />
                    );
                })
            }

        </ul>
    )
}


