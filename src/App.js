//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Header from './components/Header';
import Card from './components/Card';
import auto_1 from '../src/assets/img/auto_1.jpg';
import auto_2 from '../src/assets/img/auto_2.jpg';
import auto_3 from '../src/assets/img/auto_3.jpg';
import Footer from './components/Footer';

function App() {
  return (
  <main class="galeria">
    <Header />
    <div class="cards">
      <Card imagen={auto_1} name="Ford Modelo T"description="Perteneció al último monarca de Egipto, el rey Farouk. Es una pieza de museo del año 1924."/>
      <Card imagen={auto_2} name="Volkswagen Type 1" description="Mejor conocido como Escarabajo, Beetle, Vocho o Fusca según el país. Año 1925."/>
      <Card imagen={auto_3} name="Pontiac Firebird" description="Firebird 350 de primera generación (1968), de color rojo y con motor v8."/>
    </div> 
    <Footer />
  </main>
  );
}

export default App;
