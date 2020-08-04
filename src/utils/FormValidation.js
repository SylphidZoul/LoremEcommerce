const validateNameString = (name) => {
  if (/^[a-zA-Z\s]*$/.test(name)) return true

  return false
}

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true

  return false
}

const validatePassword = (password) => {
  if (password.match(/^[A-Za-z]\w{6,20}$/)) return true

  return false
}

export const validateLoginData = (email, password) => {
  const correctEmail = validateEmail(email)
  const correctPassword = validatePassword(password)

  if (!correctEmail) return 'Email inválido'
  if (!correctPassword) return 'Contraseña inválida'

  return true
}

const validateSignupData = (name, email, password, password2) => {
  const basicDataValidation = validateLoginData(email, password)
  const nameValidation = validateNameString(name)
  if (!nameValidation) return 'Nombre inválido'
  if (typeof basicDataValidation === 'string') return basicDataValidation
  if (password !== password2) return 'Las contraseñas no coínciden'

  return true
}

export const validateFormData = (operation, event) => {
  if (operation === 'login') {
    const loginValidation = validateLoginData(event.target[0].value, event.target[1].value)
    if (typeof loginValidation === 'string') return loginValidation

    const user = {
      email: event.target[0].value.toLowerCase(),
      password: event.target[1].value
    }
    return user
  } else {
    const signupValidation = validateSignupData(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value)
    if (typeof signupValidation === 'string') return signupValidation

    const user = {
      name: event.target[0].value,
      email: event.target[1].value.toLowerCase(),
      password: event.target[2].value
    }
    return user
  }
}
