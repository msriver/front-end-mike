import './App.css'

import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';

import { UserProvider } from './contexts/UserInfoContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
