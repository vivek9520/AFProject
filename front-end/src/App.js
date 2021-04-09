import logo from './logo.svg';
import './App.css';
import Client_Home from './components/client/Client_Home';
import {BrowserRouter,Route} from 'react-router-dom'
import AdminHome from './components/admin/AdminHome';
import Login from './components/login/Login';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Route exact path="/" component={Client_Home}/>
        <Route path="/admin" component={AdminHome}/>
        <Route path ="/login" component={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
