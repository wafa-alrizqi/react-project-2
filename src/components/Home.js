import React from 'react'
import Header from './Header';
import Cat from './Cat';
import About from './About';
import Footer from './Footer';

function Home() {
  document.title = 'Plants Zone'
  return (
    <>
    <Header></Header>
    <Cat></Cat>
    <About></About>
    <Footer></Footer>
    </>
  )
}

export default Home