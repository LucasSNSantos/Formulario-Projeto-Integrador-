import {Home} from './pages/Home';
import {Formulario} from './pages/Formulario';
import {Funcionalidades} from './pages/Funcionalidades'
import {BrowserRouter, Route }  from 'react-router-dom';
import { Register } from './pages/Register';
import { Pentest } from './pages/Pentest';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/Registrar" exact component={Register}/>
      <Route path="/Funcionalidades" exact component={Funcionalidades}/>
      <Route path="/Formulario" component={Formulario}/>
      <Route path="/Pentest" component={Pentest}/>
    </BrowserRouter>
  )
}

export default App;
