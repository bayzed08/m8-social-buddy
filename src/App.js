import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import NoMatch from './NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>
     </Router>
    </div>
  );
}

export default App;
