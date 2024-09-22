import React, {useState, useEffect} from 'react'
import "./Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: ""
    })
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onForget = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8082/user/forgot", formData)
        if (response.data.success) {
            setFormData({
                email: "",
                password: ""
            })
            alert(response.data.message)
        }

    }
    const { email } = formData;
    return (
        <div className="container-main d-flex justify-content-center align-items-center flex-column">
            <div className="container d-flex justify-content-center align-items-center">
                <form onSubmit={onForget}>
                <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formGroupExampleInput" name='email' value={email} onChange={onChange} placeholder="Enter Email" />
                    </div>
                    <button className='btn btn-primary' type='submit'>Reset password</button>
                </form>
            </div>
        </div>
    )
}

export default Forget
