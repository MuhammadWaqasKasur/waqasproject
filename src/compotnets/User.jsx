import { useState, useEffect } from 'react'
import React from 'react'
import { data } from './data'
const User = () => {
    const [users, setUsers] = useState(data)

    useEffect(() => {
        setUsers(data)
    }, [data])

    return (
        <div>
            <div className="d-flex flex-wrap">
                {
                    users.map((product) => {
                        const { id, title, price, description, category, image, rating } = product;
                        return (
                            <>
                                <h1>{id}</h1>
                                <h1>{title}</h1>
                                <p>{price}</p>
                                <p>{description}</p>
                                <p>{category}</p>
                                <p>{image}</p>
                                <p>{rating.rate}</p>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default User