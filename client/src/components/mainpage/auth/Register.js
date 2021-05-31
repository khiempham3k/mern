import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [user,setUser] = useState({
        name:'',email:'',password:''
    })
    const onChangeInput = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const registerSubmit =async (e) =>{
        e.preventDefault()
        try {
            await axios.post(`/user/register`,{...user})
            localStorage.setItem('firstLogin',true)
            alert("Register is Sucesss")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div>
            <div className="login-page">
                <form onSubmit={registerSubmit}>
                    <h2>Register</h2>
                    <input type="text" name="name" required placeholder="Name" value={user.name} onChange={onChangeInput}/>
                    <input type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput}/>
                    <input type="password" name="password" required placeholder="Password" value={user.password} autoComplete="on" onChange={onChangeInput} />
                    <div className="row">
                        <button type="submit">Register</button>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
