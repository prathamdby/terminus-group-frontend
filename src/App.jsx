import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import ContactSection from './components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Footer />
    <ContactSection />
    </>
  )
}

export default App
