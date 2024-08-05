import './App.css';

function App() {

  const array_1 = [
    'pedro',
    'miguel',
    'luis',
    'leandro',
    'jubileu'
  ]

  // map array_1 into a new array of JSX nodes(listItems)
  // JSX transforms the values into an XML like format
  const listItems = array_1.map(person => <li>{person}</li>);

  return (
    <div className="container">
      <ul className="ulStyled">
        {listItems}
      </ul>
    </div>
  );
}

export default App;
