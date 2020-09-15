import { useState, useEffect } from 'react'

export const useUserData = (isAuth, token) => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (isAuth) {
      window.fetch('https://lorem-backend.herokuapp.com/user/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(response => {
          setUserData(response.body)
        })
    }
    // eslint-disable-next-line
  }, [])

  return [userData, setUserData]
}
