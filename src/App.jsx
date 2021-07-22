import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemList />
          </Route>
          <Route exact path="/categoria/:idCategoria">
            <ItemList />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/seguimiento">
            <h2>Página en construccián</h2>
          </Route>
          <Route path="/carrito">
            <h2>Página en construccián</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
