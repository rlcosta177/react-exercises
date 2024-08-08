import UserGreeting from "./UserGreeting"

export function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Rodrigo"/>
    </>
  )
}

export default App