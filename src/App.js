import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import PriceList from './components/PriceList'

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去云南旅游",
    "price": 400,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PriceList
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item.id)}}
      />
    </div>
  );
}

export default App;
