import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { FormComponent } from '../Components/Form'
import { validateFormData } from '../utils/FormValidation'

export const Form = ({ operation }) => {
  const { handleAuth, isFetching, setError } = useContext(LoginContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationResult = validateFormData(operation, event)
    if (typeof validationResult === 'string') {
      setError(validationResult)
    } else {
      handleAuth(validationResult, operation)
    }
  }

  return (
    <FormComponent
      operation={operation}
      handleSubmit={handleSubmit}
      isFetching={isFetching}
    />
  )
}
