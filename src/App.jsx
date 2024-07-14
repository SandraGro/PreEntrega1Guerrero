import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer';

function App() {
  const [cartCount, setCartCount] = useState(5);

  const handleAdd = (count) => {
    setCartCount(cartCount + count);
    console.log(`Added ${count} items to the cart. New cart count: ${cartCount + count}`);
  };

  return (
    <Router>
      <NavBar cartCount={cartCount} title="online Store"/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
