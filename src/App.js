import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'; 
import logo from './logo.png';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <img  src={logo} alt="logo"></img>
      <NavBar /> 
      <ItemListContainer greeting= "esto deberia ser el landing"/>
   
      <hr/>
      <ItemCount stock={5} initial={1} onAdd={0}/>
    </div>
  );
}

export default App;
