import React from 'react';
import Home from '@components/home/Home';
import reactLogo from '@assets/react.svg';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="react-logo" />
      </a>
      <Home />
    </div>
  );
};

export default App;
