
import './App.css';
import Main from './main';

import { Link, Route, Router, Switch } from 'react-router-dom'
import Show from './show';

function App() {
  return (
    
   
    <Switch>

<Route exact path='/'  component={Main} />
<Route exact path='/show'  component={Show} />


      </Switch>


     

  );
}

export default App;

 
