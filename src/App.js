import { useState } from 'react';
import './App.css';
import Dashboard from './Components/dashboard';
import Navbar from './Components/navbar';

function App() {

  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards(prev => [
      ...prev,
      { id: Date.now(), title: "New Card" }
    ]);
  };

  const onDelete = (id) => {
    setCards(prev => prev.filter(card => card.id !== id))
  }

  return (
    <>
      <Navbar onAdd={addCard} />
      <Dashboard cards={cards} deleteFn={onDelete} />
    </>
  );
}

export default App;
