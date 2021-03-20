import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/Table/Table.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Table newGame />
  </React.StrictMode>,
  document.getElementById('root')
);