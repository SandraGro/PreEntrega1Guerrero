import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer";

function App() {

  const [cartCount, setCartCount] = useState(5);

  return (
    <>
      <NavBar cartCount = {cartCount} title="online store"/>
      <ItemListContainer greetings=" Welcome" />
    </>
  );
}

export default App;
