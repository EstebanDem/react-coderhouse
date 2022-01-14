import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CategoryListContainer from './containers/CategoryListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';

const App = () => {
  
  return (
    <div className="App">
      
      
      <CartContextProvider>
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

            <Route path='/cart'>
              <Cart/>
            </Route>

          </Switch>

        </BrowserRouter>
        <Footer/>
      </CartContextProvider>
    </div>
  );

}

export default App;
