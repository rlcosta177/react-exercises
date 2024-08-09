import { useState, useEffect } from 'react'

function App() {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"]

  const [color, setColor] = useState("blue")

  // get a random color from the colors array
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  // whenever the button is clicked, change the background color base on getRandomColor
  const handleClick = () => {
    setColor(getRandomColor())
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className="App">
      <button onClick={handleClick}>Change BG Color</button>
    </div>
  )
}

export default App
