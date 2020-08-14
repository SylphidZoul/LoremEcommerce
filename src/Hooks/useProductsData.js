import { useState, useEffect } from 'react'

export const useProductsData = (query) => {
  const [data, setData] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    window.fetch(`http://192.168.100.10:3004/products/${query}`, {
    })
      .then(res => res.json())
      .then(response => {
        setData(response.body)
        setIsFetching(false)
      })
  }, [query])

  return { data, isFetching }
}
