import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Chakra from "./Chakra";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
       <Chakra/>
      </ChakraProvider>
    </>
  );
}

export default App;
