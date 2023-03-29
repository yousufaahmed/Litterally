import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginBox() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9992/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
                console.log(res)
                const data = res.data;
            
            if (data.status === true)
            {
                alert("Login Successfully");
                navigate('/home');
            }
            else
            {
                alert("Login Failed")
            }  
            }, fail => {
                console.error(fail); // Error!
        });
        }
         catch (err) {
          alert(err);
        }
      }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Login</h2>
                    <hr/>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                    <form>
                        <div class="form-group">
                            <label>email</label>
                            <input type="email"  class="form-control" id="email" placeholder="Enter Email" value={email}
                                onChange={(event) => {
                                setEmail(event.target.value);
                                }}/>
                        </div>
                        <div class="form-group">
                            <label>password</label>
                            <input type="password"  class="form-control" id="password" placeholder="Enter Password" value={password}
                                onChange={(event) => {
                                setPassword(event.target.value);
                                }}/>
                        </div>
                        <a href = 'localHost:3000/home'><button type="submit" class="btn btn-primary" onClick={login}>Login</button></a>
                    </form>
                </div>
            </div>
        </div>
     </div>
    );
}
  
export default LoginBox;