import Registration from "./Views/Registration/Registration.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <div className="App">
      <Registration/>
    </div>
  );
}

export default App;
