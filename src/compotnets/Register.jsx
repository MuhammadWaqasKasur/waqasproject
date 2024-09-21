import React, { useState } from 'react'
import "./Login.css"

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        address: "",
        gender: "",
        country: ""
    })
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            age: "",
            country: "",
            address: "",
            gender: ""
        })
    }
    const { name, age, email, address, gender, country } = formData;
    return (
        <div className="container-main d-flex justify-content-center align-items-center flex-column">
            <div className="container d-flex justify-content-center align-items-center">
                <form onSubmit={onSubmit}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" name='name' value={name} onChange={onChange} placeholder="Enter Your Name" />
                    </div>
                    < div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Age</label>
                        <input type="number" class="form-control" id="formGroupExampleInput" name='age' value={age} onChange={onChange} placeholder="Enter Your Age" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formGroupExampleInput" name='email' value={email} onChange={onChange} placeholder="Enter Your Email" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Address</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" name='address' value={address} onChange={onChange} placeholder="Enter Your Address" />
                    </div>
                    <div class="mb-3" style={{ display: "flex", gap: "10px" }}>
                        <label for="formGroupExampleInput" class="form-label" style={{ display: "flex", gap: "5px" }}>Gender:</label>
                        <label value={age}>Male</label>
                        <input type="radio" name='gender' defaultValue={"Male"} value={"Male"} onChange={onChange} />
                        <label>Female</label>
                        <input type="radio" name='gender' value={"Female"} onChange={onChange} />

                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Country</label>
                        <select name="country" onChange={onChange} defaultValue={"Pakistan"}>
                            <option value="Pakistan" >Pakistan</option>
                            <option value={"India"}>India</option>
                            <option value={"USA"}>USA</option>
                            <option value={"UK"}>UK</option>

                        </select>

                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register
