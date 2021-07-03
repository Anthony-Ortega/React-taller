import './App.css';
import ListCards from './Components/Cards/ListCards';
import Navbar from './Components/Navbar/Navbar'
import Calculadora from './Components/calcu/Calculadora';
import Cards from './Components/Cards/Cards'

/* function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListCards/>
      
      
    </div>
  );
} */

function App(){
  return(
    <div className="App">
      <div className= 'text-warning bg-danger ' > 
      <h1>TALLER DE POO ---- ANTHONY ORTEGA</h1></div>
      <p className= 'text-success'> </p>
      
      <Calculadora/>
      <Cards/>
    </div>
  )
  
}
export default App;
