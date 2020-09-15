import { useState, useEffect } from 'react'

export const useProductsData = (params) => {
  const [data, setData] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    window.fetch(`https://lorem-backend.herokuapp.com/products/${params}`, {
    })
      .then(res => res.json())
      .then(response => {
        setData(response.body)
        setIsFetching(false)
      })
  }, [params])

  return { data, isFetching }
}
