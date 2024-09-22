import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onLogin = async(e) => {
        e.preventDefault();
        const response=await axios.post("http://localhost:8082/user/login",formData)
        if(response.data.success){
            setFormData({
                email: "",
                password: ""
            })
            alert(response.data.message)
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
        }
        
    }
    const { email, password } = formData;
    return (
        <div className="container-main d-flex justify-content-center align-items-center flex-column">
            <div className="container d-flex justify-content-center align-items-center">
                <form onSubmit={onLogin}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formGroupExampleInput" name='email' value={email} onChange={onChange} placeholder="Enter Email" />
                    </div>
                    < div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Password</label>
                        <input type="password" class="form-control" id="formGroupExampleInput" name='password' value={password} onChange={onChange} placeholder="Enter Password" />
                    </div>
                    <Link class="nav-link" to="/forget">Forget, Password</Link><br/>
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
