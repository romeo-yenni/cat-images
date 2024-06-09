import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import RandomCat from './components/RandomCat';
import CustomCat from './components/CustomCat';

function App() {

  const [cat, setCat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading)
  return (
    <>
        <Canvas image={cat} isLoading={isLoading} />
        <RandomCat updateImage={setCat} setIsLoading={setIsLoading}/>
        <CustomCat updateImage={setCat} setIsLoading={setIsLoading}/>
    </>
  );
}

export default App;
