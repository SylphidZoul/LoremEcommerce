import React from 'react'
import { Header } from '../Components/Header'
import { ProductsList } from '../Pages/Products'
import { SectionComponent } from '../Components/SectionComponent'

const ListaDeProductos = [
  {
    id: 1,
    name: 'zxfdafweqrqrwqr',
    descripcion: 'asd qwrqwrqwr123 312312sadasd'
  },
  {
    id: 2,
    name: 'Fzxczxczxc',
    descripcion: 'Uzxczxczxcccxzaopa'
  },
  {
    id: 3,
    name: 'asdasdasdasd',
    descripcion: 'asdasdasdasdasdasdasdas'
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <SectionComponent colorTop='mainDark' colorBot='mainSilver' color='mainWhite'>
        <ProductsList products={ListaDeProductos} />
      </SectionComponent>
      <div style={{ background: '#3f0377' }}>
        <ProductsList products={ListaDeProductos} />
      </div>
      <SectionComponent colorTop='mainSilver' colorBot='mainDark' color='mainDark' />
    </>
  )
}

export default Home
