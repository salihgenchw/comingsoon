import './index.css'
import Leftside from "./components/Leftside";
import RightSide from './components/RightSide';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 mt-5">
            <Leftside/>
          </div>
          <div className="col-lg-7 col-md-12 d-none d-lg-block">
            <RightSide/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
