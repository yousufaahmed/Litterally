import '../index.css';
import '../profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const name = 'Yousuf Ahmed'

// UPDATE WITH BACKEND AND API TO UPDATE POINTS AFTER SUCCESSFUL SEARCH

var points = 200;

function Profile() {
  return (
    <div className="Home">
      <div>
        <h1 style = {{ margin: '50px' }}>Welcome {name}</h1>
        <img className = 'pfpimage1' src = '../../images/pfp1.jpg' alt = 'img1'></img>
        <h3>Point Count: {points}</h3>
      </div>
    </div>
  );
}

// UPDATE WITH BACKEND MONGOOSE DB TO HAVE CRUD DELETE METHODS TO DELETE ACCOUNT

export default Profile;
