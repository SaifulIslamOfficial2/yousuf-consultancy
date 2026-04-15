import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function AuthProvider({children}) {

      const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices((prev) => [...prev, service]);
  };



  

  return (
   <AuthContext.Provider value={{ services, addService }}>
    {children}
   </AuthContext.Provider>  
  )
}

export default AuthProvider