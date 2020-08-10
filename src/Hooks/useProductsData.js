import { useState, useEffect } from 'react'

export const useProductsData = () => {
  const [data, setData] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    window.fetch('http://192.168.100.10:3004/products/', {
    })
      .then(res => res.json())
      .then(response => {
        setData(response.body)
        setIsFetching(false)
      })
  }, [])

  return { data, isFetching }
}
