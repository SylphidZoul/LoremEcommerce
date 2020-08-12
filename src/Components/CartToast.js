import React from 'react'
import ReactDOM from 'react-dom'
import { ToastList, Toast, ToastImg, ToastTitle, ToastMessage, Close } from '../StyledComponents/StyledToast'

export const CartToast = ({ list, deleteToast }) => {
  return (
    list.length > 0 && (
      ReactDOM.createPortal(
        <ToastList>
          {
            list.map((product, index) => {
              return (
                <Toast key={index}>
                  <Close onClick={() => deleteToast(product._id)}>
                    x
                  </Close>
                  <ToastImg src={product.img} alt='img' />
                  <ToastTitle>
                    ¡Añadido al carrito!
                  </ToastTitle>
                  <ToastMessage>
                    {product.name}
                    <br />
                    {product.artist}
                  </ToastMessage>
                </Toast>
              )
            })
          }
        </ToastList>,
        document.getElementById('toast')
      )
    )
  )
}
