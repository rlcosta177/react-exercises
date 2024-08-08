import Student from './Student.jsx'

export function App() {

  return (
    <>
      <Student name="Rodrigo" age={21} isStudent={true} />
      <Student name="Marco" age={24} isStudent={true} />
      <Student name="Joao" age={25} isStudent={false} />
      <Student name="Iuri" age={24} isStudent={false} />
      <Student />
    </>
  )
}

export default App
