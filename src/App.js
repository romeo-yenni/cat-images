import './App.css';
import Canvas from './components/Canvas';
import RandomCat from './components/RandomCat';
import CustomCat from './components/CustomCat';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

function App() {
  
  const [custom, setCustom] = useState({
    text: '',
    size: '',
    color: ''
    });
    
  const URLS = {
    RANDOM: 'https://cataas.com/cat',
    CUSTOM: `https://cataas.com/cat/says/${custom.text}?font=Impact&fontSize=${custom.size}&fontColor=${custom.color}`
  }
    
  const [url, setUrl] = useState(URLS.RANDOM)
      
  const handleNewCat = (url) => {
    setUrl(url);
    client.invalidateQueries(['cat', url]);
  };

  return (
    <QueryClientProvider client={client}>
      <div className='container'>
          <Canvas url={url} />
          <div className='button-container'>
            <RandomCat handleNewCat={ () => handleNewCat(URLS.RANDOM) } />
            <CustomCat handleNewCat={ () => handleNewCat(URLS.CUSTOM) } setCustom={setCustom} custom={custom} />
          </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
