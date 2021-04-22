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
        <Route path='/introdution' component={Introdution}/>
        <Route path='/installation/' component={Installation}/>
        <Route path='/docs' component={Docs}/>
      </Switch>
    </div>
  );
}

export default App;
