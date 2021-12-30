import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CategoryListContainer from './containers/CategoryListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  
  return (
    <div className="App">
      
      

      <BrowserRouter>
        <NavBar/>
        <Switch>
          
          <Route exact path="/">
            <ItemListContainer/>
          </Route>

          <Route exact path="/categorias">
            <CategoryListContainer/>
          </Route>

          <Route exact path="/categorias/:catId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/discos/:itemId">
            <ItemDetailContainer/>
          </Route>

        </Switch>

      </BrowserRouter>
      <Footer/>
    </div>
  );

}

export default App;
