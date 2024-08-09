import List from './List.jsx'

export function App() {

  const fruits = [
    {id:1, name: "maca", calories: 10},
    {id:2, name: "banana", calories: 20}, 
    {id:3, name: "limao", calories: 41}, 
    {id:4, name: "alfininho", calories: 199}, 
    {id:5, name: "batata frita", calories: 213}
  ];

  const veggies = [
    {id:1, name: "alfacers", calories: 9},
    {id:2, name: "iceberg", calories: 39}, 
    {id:3, name: "bingchilling", calories: 142}, 
    {id:4, name: "cepo", calories: 23}, 
    {id:5, name: "fkinMIKEWAZOWSKI", calories: 111}
  ];

  return (
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {veggies.length > 0 && <List items={veggies} category="Veggies"/>}
    </>
  )
}

export default App
