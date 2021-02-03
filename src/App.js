// importing files from components
import Navbar from './components/Navbar.js';
import Home from './components/home.js';
import Sidebar from './components/sidebar.js';
import Paragraph from './components/bottom-footer.js';
import Footer from './components/footer.js';
import paragraph from './components/bottom-footer.js';


// App function
function App() {
  return (
    <div className="App">
      {/* print Navbar */}
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
          <Home />
          </div>
          <div className="col-4">
          <Sidebar />
          </div>
        </div>
        <div className="row">
        <div className="col-6">
         <Paragraph />
        </div>
        </div>
      </div>
     
   
      <Footer />
      
    </div>
  );
}

export default App;
