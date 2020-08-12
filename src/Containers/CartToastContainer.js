import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { CartToast } from '../Components/CartToast'

export const CartToastContainer = () => {
  const { cart } = useContext(CartContext)
  const [list, setList] = useState([])

  useEffect(() => {
    if (cart.last !== undefined) {
      setList([...list, cart.last])
    }
    // eslint-disable-next-line
  }, [cart.last])

  useEffect(() => {
    if (list.length) {
      var interval = setInterval(() => {
        deleteToast(list[0]._id)
      }, 3000)
    }
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line
}, [list]);

  const deleteToast = (_id) => {
    const listItemIndex = list.findIndex(e => e._id === _id)
    list.splice(listItemIndex, 1)
    setList([...list])
  }

  return (
    <CartToast list={list} deleteToast={deleteToast} />
  )
}
