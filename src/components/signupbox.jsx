import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {  useState } from "react";
 
function SignUpBox() {
 
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9992/signup", {
          firstname: fname,
          lastname: lname,
          email: email,
          password: password,
          });
          alert("Signed Up Successfully");
 
        } catch (err) {
          alert(err);
        }
      }
 
    return (
        <div>
            <div class="container mt-4" >
                <div class="card">
                    <h1>Account Registation</h1>
                    <form>
                        <div class="form-group">
                            <label>First name</label>
                                <input type="text"  class="form-control" id="fname" placeholder="First Name" value={fname}
                                    onChange={(event) => {
                                    setFName(event.target.value);
                                    }}/>
                        </div>
                        <div class="form-group">
                            <label>Last name</label>
                            <input type="text"  class="form-control" id="lname" placeholder="Last Name" value={lname} 
                                onChange={(event) => {
                                setLName(event.target.value);
                                }}/>
                        </div>
                        <div class="form-group">
                            <label>email</label>
                            <input type="email"  class="form-control" id="email" placeholder="Email" value={email}
                                onChange={(event) => {
                                setEmail(event.target.value);
                                }}/>
                        </div>
                        <div class="form-group">
                            <label>password</label>
                            <input type="password"  class="form-control" id="password" placeholder="Password" value={password}
                                onChange={(event) => {
                                setPassword(event.target.value);
                                }}/>
                        </div>
                        <a href = 'localHost:3000/home'><button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button></a>
                    </form>
                </div>
            </div>
        </div>
    );
}
  
export default SignUpBox;