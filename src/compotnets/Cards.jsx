import { useState, useEffect } from 'react'
import { data } from './data'
import React from 'react'

const Cards = () => {
    const [users, setUsers] = useState(data)
    const [search, setSearch] = useState({
        name: ""
    })
    const onChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value })
    }
    const onSubmitSearch = (e) => {
        e.preventDefault();
        const filteredUsers = users.filter((user) => search.name === user.title)
        setUsers(filteredUsers)
    }
    useEffect(() => {
        setUsers(data)
    }, [data])

    const { name } = search;
    return (
        <>
            <form onSubmit={onSubmitSearch}>
                <input type="text" name="name" value={name} onChange={onChange} />
                <button type='submit'>Search</button>
            </form>
            <button onClick={() => window.location.reload()}>Reset</button>
            <div className="d-flex flex-wrap gap-5" style={{ paddingLeft: "20px", marginTop: "25px" }}>
                {
                    users.map((product) => {
                        const { image, title, description, price } = product;
                        return (
                            <>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={image} class="card-img-top" alt="..." style={{ height: "20rem" }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text " style={{}}>{description}</p>
                                        <a href="#" class="btn btn-primary">{price}</a>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Cards
