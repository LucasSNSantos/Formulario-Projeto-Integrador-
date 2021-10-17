import {Home} from './pages/Home';
import {Formulario} from './pages/Formulario';
import {Funcionalidades} from './pages/Funcionalidades'
import {BrowserRouter, Route }  from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/Funcionalidades" exact component={Funcionalidades}/>
      <Route path="/Formulario" component={Formulario}/>
    </BrowserRouter>
  )
}

export default App;
