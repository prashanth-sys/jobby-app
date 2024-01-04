import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectRoute from './ProtectRouteComponent'
import NotFound from './components/NotFound'
import JobsAvailable from './components/JobsAvailable'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <ProtectRoute exact path="/jobs" component={JobsAvailable} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
