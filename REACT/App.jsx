import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import PasswordStrengthChecker from './components/PasswordStrengthChecker'
import Timer from './components/Timer'
import hooks from './components/hooks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <HelloWorld/>
      <Greeting/>
      <Counter/>
      <PasswordStrengthChecker/>
      <Timer/>
      <hooks />
    </>
  )
}

export default App
