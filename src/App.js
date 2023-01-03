import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './firebase';
import Router from "./routes/Routes";
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
