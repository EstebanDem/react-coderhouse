import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainer from './containers/ItemListContainer';
import Footer from './components/Footer/Footer';

const App = () => {
  
  /* return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Tutor"/>
      <Footer/>
    </div>
  ); */
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );

}

export default App;
