import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from "./routes/Routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
