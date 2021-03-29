// importing files from components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import NotFound from './components/NotFound.js';
import Contact from './components/Contact.js'
import Footer from './components/Footer.js';

// App function
function App() {
  return (
    <Router>
      <div className="App">
        {/* print Navbar */}
        <Navbar />
        <div className="container">
          <Switch> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
