import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./routes/Routes";
import AuthContextProvider from './core/configs/firebase';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
