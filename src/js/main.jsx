import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// component
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Cards from './components/Cards';
import CardRow from './components/Cards';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroImage />
    <CardRow /> 
    <Footer />
  </React.StrictMode>,
)
