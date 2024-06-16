import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';
function App() {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/empresa'>
                    <Empresa />
                </Route>
                <Route path='/contato'>
                    <Contato />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
