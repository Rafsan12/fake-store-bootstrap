import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProduct from './Components/AllProduct/AllProduct';
import { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  const [count, setCount] = useState(0)
  const setCartCount = () =>{
    setCount(count + 1);
  };

  useEffect(() =>{
    Aos.init();
  },[])



  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProduct setCartCount={setCartCount}></AllProduct>
      
    
    </div>
  );
}

export default App;
