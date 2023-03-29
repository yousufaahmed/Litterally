import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Share from './components/share';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ItemPage from './pages/ItemPage';
import Footer from './components/footer'

function App() {
  return (
      <div className="App">
        <Header></Header>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/item' element={<ItemPage/>} />
          </Routes>
        </Router>
        <Share></Share>
        <Footer></Footer>
      </div>
  );
}

export default App;
