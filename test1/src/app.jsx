import { useState } from 'preact/hooks'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    // fragment(<> </>) allows react to return multiple components in a single return
    <>
    <Header />
    <Food />
    <Footer />
    </>
  )
}
