import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { WelcomeToast } from '../Components/WelcomeToast'

export const WelcomeToastContainer = () => {
  const [show, setShow] = useState(false)
  const { isAuth, userData } = useContext(AuthContext)

  useEffect(() => {
    if (isAuth) {
      setShow(true)
      setTimeout(() => {
        deleteToast()
      }, 3000)
    }
  }, [isAuth])

  const deleteToast = () => {
    setShow(false)
  }
  return (show && <WelcomeToast deleteToast={deleteToast} data={userData} />)
}
