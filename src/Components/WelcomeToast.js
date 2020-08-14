import React from 'react'
import ReactDOM from 'react-dom'
import { ToastList, Toast, ToastImg, ToastTitle, Close } from '../StyledComponents/StyledToast'
import MetalHorn from '../Assets/metalhorn.svg'

export const WelcomeToast = ({ deleteToast, data }) => {
  return (
    ReactDOM.createPortal(
      <ToastList>
        <Toast>
          <Close onClick={deleteToast}>
            x
          </Close>
          <ToastImg src={data.img ? data.img : MetalHorn} alt='img' borderRadius />
          <ToastTitle alignEnd>
            ¡Bienvenido {data.name}!
          </ToastTitle>
        </Toast>
      </ToastList>,
      document.getElementById('toast')
    )
  )
}
