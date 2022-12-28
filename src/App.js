import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthContextProvider from './firebase';
import Router from "./routes/Routes";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Header/>
        <Router />
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
