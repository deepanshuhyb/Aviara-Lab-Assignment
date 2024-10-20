import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Search from './components/search'
import Result from './components/Result'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Search />
      <Result />
      <Footer />
    </>
  )
}

export default App