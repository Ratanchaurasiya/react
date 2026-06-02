import React from "react";
import axios from "axios";
import { useState } from "react";
const Registration = () => { 
    const [username, setUsername, email, setEmail, password, setPassword, setError] = useState(""); //assigning multiple states in one line
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const insert_data = (e) => {
        axios.post("https://localhost:3000/Registration", {username: username, email: email,password: password
        });
    };
    const Validation = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError("All fields are required");
        } else {
            setError("");
        }
    };
    return (
        <div className="myregistration">
            <h1>This is Registration form</h1>
            <form onSubmit={Validation}>
                <div>
                    <label>Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Username" required/><br/><br/>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" required/><br/><br/>
                </div> 
                <div>
                    <label>Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" required/><br/><br/>
                </div>
                    <input type="submit" value="Register"/>
            </form>
        </div>
    );
}
export default Registration;
