import React from 'react'
import { SearchForm, SearchBar, SearchBox, SearchButton, SearchLabel, SearchSelect } from '../StyledComponents/StyledSearch'
import BsSearch from '@meronex/icons/bs/BsSearch'

export const SearchComponent = ({
  searchRef,
  searchValue,
  fieldRef,
  sortRef,
  handleSubmit,
  handleChange
}) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBar>
        <SearchBox
          ref={searchRef}
          placeholder='Busca un disco...'
          value={searchValue}
          onChange={handleChange}
        />
        <SearchButton>
          <BsSearch size='20px' />
        </SearchButton>
      </SearchBar>
      <SearchLabel htmlFor='field' Type='fieldTitle'>
        Buscar en
      </SearchLabel>
      <SearchSelect id='field' Type='field' ref={fieldRef}>
        <option value='all'>Todos</option>
        <option value='name'>Nombres</option>
        <option value='artist'>Artistas</option>
        <option value='genre'>Géneros</option>
        <option value='tracks'>Canciones</option>
      </SearchSelect>
      <SearchLabel htmlFor='sortType' Type='sortTitle'>
        Ordenar por
      </SearchLabel>
      <SearchSelect id='sortType' Type='sort' ref={sortRef}>
        <option value='latest'>Últimos añadidos</option>
        <option value='price'>Precio</option>
        <option value='artist'>Artista</option>
        <option value='release'>Fecha de salida</option>
        <option value='sales'>Más vendidos</option>
      </SearchSelect>
    </SearchForm>
  )
}
