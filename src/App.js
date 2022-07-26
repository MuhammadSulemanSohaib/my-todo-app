import './App.scss';

import "bootstrap/dist/js/bootstrap.bundle"

import Routes from "./Pages/Routes"

import CountContextProvider from "./context/CountContext"

function App() {
  
  return (
    
    <>

    <CountContextProvider>

    <Routes />

    </CountContextProvider>

    </>
    
  )
}

export default App;
