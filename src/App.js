import './index.css'
import Leftside from "./components/Leftside";
import RightSide from './components/RightSide';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <Leftside/>
          </div>
          <div className="col-lg-7">
            <RightSide/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
