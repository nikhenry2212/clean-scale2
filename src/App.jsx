import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Routing } from './routes/route';

function App() {
  return (
    <>
     <ChakraProvider>
        <Routing/>
     </ChakraProvider>
    </>
  );
}

export default App;
