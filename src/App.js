//import logo from './logo.svg'; 
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Tutor"/>
    </div>
  );
}

export default App;
