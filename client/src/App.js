import './App.css';
import ShowImage from './Components/ShowImage';
import AddImage from './Components/AddImage';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Nav/>

        <Route exact path="/" component={ShowImage} />

        <Route exact path="/addimage" component={AddImage} />

      </Router>


    </>
  );
}

export default App;
