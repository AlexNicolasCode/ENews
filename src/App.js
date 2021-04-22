import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Introdution from './pages/introdution';
import Installation from './pages/installation';
import Docs from './pages/docs';
AOS.init();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/ENews" component={Home}/>
        <Route path='/ENews/introdution' component={Introdution}/>
        <Route path='/ENews/installation/' component={Installation}/>
        <Route path='/ENews/docs' component={Docs}/>
      </Switch>
    </div>
  );
}

export default App;
