import '../index.css';
import '../home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBoxMain from '../components/inputboxmain';

function Home() {
  return (
    <div className="home">
      <div className='container'>
        <img src = "../../images/The_Blue_Marble.jpg" alt = "Earth-img" className='earth-img'></img>
        <h1 className='centered title1'>Save the Planet Using LITTERALLY!</h1>
      </div>
      <div className='container'>
        <InputBoxMain></InputBoxMain>
      </div>
    </div>
  );
}

export default Home;
