import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { FormComponent } from '../Components/Form'
import { validateFormData } from '../utils/FormValidation'

export const Form = ({ operation }) => {
  const { handleAuth, isFetching, setError } = useContext(AuthContext)

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
