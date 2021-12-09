import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Channels = [
  { id: 1,
    name: 'Netflex',
    class: 'nf',
    website:'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg',
  },
  {
    id: 2,
    name: 'HBO MAX',
    class: 'hb',
    website:'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
  },
  {
    id: 3,
    name: 'Hulu',
    class: 'hu',
    website:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg',
  },
  {
    id: 4,
    name: 'Amazon Prime',
    class: 'nf',
    website:'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
  }
]

export default function App() {
  
  //Insert router, links here

  return (
    <Router>
      <h1>TV APPS</h1>
        <Link to ="/netflix"><img className="nf" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="netflix"></img></Link>
        <Link to ="/hbomax"><img className="hb" src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="hbomax"></img></Link>
        <Link to ="/hulu"><img className="hu" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="hulu"></img></Link>
        <Link to ="/primevideo"><img className="pr" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="primevideo"></img></Link>
    
        <Switch>
          <Route path="/:id">
            <Child />
          </Route>
          
        </Switch>
    </Router>
  )
}


function Child() {

  // Below this comment, there's one major key script missing
  const slug = useParams();
  const id = slug.id;

  return (
    <div>
        <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
