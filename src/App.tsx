import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonBar } from './controls/ButtonBar';
import { ResultsTable } from './controls/ResultsTable';
import { TableItem } from './controls/types';

const items: TableItem[] = [
  {
    location: 'Here',
    login: 'me',
    name: "It's me",
  },
  {
    location: 'Somewhere else',
    login: 'you',
    name: "It's you",
  },
];

function App() {
  const [itemsState, setItemsState] = useState(items);

  const onButtonClick = (items: TableItem[]) => {
    setItemsState(items);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonBar onClick={onButtonClick} />
        <ResultsTable items={itemsState} />
      </header>
    </div>
  );
}

export default App;
