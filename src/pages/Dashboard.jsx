import React, { useState,useEffect } from 'react'
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
        const [token, setToken] = useState("");
        const [decodedToken, setDecodedToken] = useState(null);
    
        useEffect(() => {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                try {
                    const decoded = jwtDecode(storedToken);
                    setDecodedToken(decoded);
                } catch (error) {
                    console.error("Failed to decode token:", error);
                    setDecodedToken(null); // Handle error or set as needed
                }
            }
        }, []);
    
        useEffect(() => {
            if (decodedToken) {
                console.log(decodedToken);
            }
        }, [decodedToken]);
    
  return (
    <div>
      <h1>Welcome To Dashboard {decodedToken?.user?.name}</h1>
    </div>
  )
}

export default Dashboard
