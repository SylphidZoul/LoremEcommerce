import { useState, useEffect, useRef } from 'react'

export const useLazyLoading = () => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  })
  return [show, ref]
}
