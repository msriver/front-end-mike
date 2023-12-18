import { react, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/commons/Header';

import Landing from './components/landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="container">
      <Header />
      <Landing />
    </div>
  )
}

export default App
