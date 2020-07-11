import React from 'react';
// import logo from './logo.svg';
// import { Sample } from './sample';
//export default Sample・・そのまま　import クラス名を指定
//export Sample・・import {クラス名}じゃないとだめ
import { Form } from './form';
import { List } from './list';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo List Application</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
