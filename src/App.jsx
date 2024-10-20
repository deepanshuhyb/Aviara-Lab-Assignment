import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Search from './components/search'
import Result from './components/Result'




function App() {
  const [result, Setresult] = useState('')

  return (
    <>
      <Header />
      <Search Setresult={Setresult} />
      <Result result={result} />
      <Footer />
    </>
  )
}

export default App