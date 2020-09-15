import React, { useState, useEffect, useRef } from 'react'
import { SearchComponent } from '../Components/Search'

export const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('')
  const searchRef = useRef(null)
  const fieldRef = useRef(null)
  const sortRef = useRef(null)

  useEffect(() => {
    if (searchRef.current) {
      setTimeout(() => {
        if (searchText === searchRef.current.value) {
          onSearch(`query=${searchText}&field=${fieldRef.current.value}&sort=${sortRef.current.value}`)
        }
      }, 600)
    }
  }, [searchText])

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(`query=${searchText}&field=${fieldRef.current.value}&sort=${sortRef.current.value}`)
  }

  return (
    <SearchComponent
      searchRef={searchRef}
      searchValue={searchText}
      fieldRef={fieldRef}
      sortRef={sortRef}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  )
}
