import React, {useState, useEffect} from 'react'
import "./Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        code:""
    })
    const [showOtp,setShowOtp]=useState(false)
    const [emailDisable,setEmailDisable]=useState(false)
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onForget = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8082/user/forgot", formData)
        if (response.data.success) {
            setShowOtp(true)
            setEmailDisable(true)
            alert(response.data.message)
        }

    }
    const onVerify=async(e)=>{
        e.preventDefault();
        const response=await axios.post("http://localhost:8082/user/verify",formData)
        if(response.data.success){
            alert(response.data.message)
        }
    }
    const { email,code } = formData;
    return (
        <div className="container-main d-flex justify-content-center align-items-center flex-column">
            <div className="container d-flex justify-content-center align-items-center">
                <form onSubmit={onForget}>
                <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formGroupExampleInput"  disabled={emailDisable}  name='email' value={email} onChange={onChange} placeholder="Enter Email" />
                    </div>
                    <button className='btn btn-primary'  disabled={emailDisable}  type='submit'>Send Code</button>
                </form>
                {
                        showOtp ? (
                            <form onSubmit={onVerify}>
                            <div class="my-3">
                            <label for="formGroupExampleInput" class="form-label">Code</label>
                            <input type="number" class="form-control" id="formGroupExampleInput" name='code' value={code} onChange={onChange} placeholder="Enter code" />
                        </div>
                        <button className='btn btn-primary' type='submit'>Verify Code</button>
                        </form>
                        ) :null
                    }
            </div>
        </div>
    )
}

export default Forget
