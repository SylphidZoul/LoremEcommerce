import React, { useState, useEffect, useRef } from 'react'
import { SearchComponent } from '../Components/Search'

export const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('')
  const searchRef = useRef()
  const fieldRef = useRef()
  const sortRef = useRef()

  useEffect(() => {
    if (searchRef.current) {
      const tick = setTimeout(() => {
        if (searchText === searchRef.current.value) {
          onSearch(`query=${searchText}&field=${fieldRef.current.value}&sort=${sortRef.current.value}`)
        }
      }, 600)
      return () => clearTimeout(tick)
    }
  }, [searchText, onSearch])

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(`query=${searchText}&field=${fieldRef.current.value}&sort=${sortRef.current.value}`)
  }

  return (
    <SearchComponent
      searchValue={searchText}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      ref={{ searchRef, fieldRef, sortRef }}
    />
  )
}
