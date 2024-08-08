import Card from './Card.jsx'

export function App() {
  const cardCount = 20;
  // get cardCount length
  const cards = Array.from({ length: cardCount });

  return (
    // the fragment(<> </>) is needed to run js code(seems like)
    <>
      {cards.map((index) => (
        <Card key={index} />
      ))}
    </>
  );
}

export default App