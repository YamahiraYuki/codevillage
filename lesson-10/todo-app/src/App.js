import React from 'react';
// import logo from './logo.svg';
// import { Sample } from './sample';
//export default Sample・・そのままimport クラス名を指定
//export Sample・・import {クラス名}じゃないとだめ
import { Form } from './form';
import { List } from './list';
import shortid from 'shortid';

import './App.css';

function App() {
  const [todoAry, setTodoAry] = React.useState([])
  const addNewTodo = (titleText) => {

    setTodoAry([
      ...todoAry,
      {
        title: titleText,
        id: shortid.generate()
      }
    ])
  }

  return (
    <div className="App">
      <h1>ToDo List Application</h1>
      <Form addAction={addNewTodo} />
      <List todoItems={todoAry} />
    </div>
  );
}

export default App;
