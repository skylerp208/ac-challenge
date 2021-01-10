import React from 'react';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import TableContainer from './Components/TableContainer/TableContainer';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <TableContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
