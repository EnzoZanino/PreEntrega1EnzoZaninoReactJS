import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Shop San Luis" />
      <Footer />
    </>
  )
}

export default App