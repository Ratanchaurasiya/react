import React from "react";
import axios from "axios";
import { useState } from "react";
const Registration = () => { 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const insert_data = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }
        try {
            const response = await axios.post("http://localhost:5500/register", {
                name: username,
                email: email,
                password: password
            });
            setSuccess("Registration successful!");
            setError("");
            setUsername("");
            setEmail("");
            setPassword("");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.");
            setSuccess("");
        }
    };

    const Validation = (e) => {
        insert_data(e);
    };
    return (
        <div className="myregistration">
            <h1>This is Registration form</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{color: 'green'}}>{success}</p>}
            <form onSubmit={Validation}>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Username" required/><br/><br/>
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" required/><br/><br/>
                </div> 
                <div>
                    <label>Password</label>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" required/><br/><br/>
                </div>
                    <input type="submit" value="Register"/>
            </form>
        </div>
    );
}
export default Registration;
