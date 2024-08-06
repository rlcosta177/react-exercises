import { useState, useEffect } from 'react'

function App() {
  // Define a list of colors
  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"]

  // Initialize state with the first color or any color you prefer
  const [color, setColor] = useState("blue")

  // Function to get a random color from the list
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  // Function to handle the button click
  const handleClick = () => {
    setColor(getRandomColor())
  }

  // Update the background color when the color state changes
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
