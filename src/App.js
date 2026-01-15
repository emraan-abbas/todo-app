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

  return (
    <>
      <Navbar onAdd={addCard} />
      <Dashboard cards={cards} />
    </>
  );
}

export default App;
