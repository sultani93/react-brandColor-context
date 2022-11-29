import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import MainContext from '../MainContext'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import Brand from './Brand'
import { GrLinkPrevious } from 'react-icons/gr'
import Loader from './Loader'

const Collection = () => {
  const { slugs } = useParams()
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext)

  const clearSelectedBrands = () => {
    setSelectedBrands([])
  }

  useEffect(() => {
    setSelectedBrands(slugs.split(','))
  }, [])

  return (
    <main className='content'>
      <header className='header'>
        <Link to='/react-brandColor-context/' onClick={clearSelectedBrands}>
          <p className='back-btn'>
            <GrLinkPrevious />
            All brands
          </p>
        </Link>
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className='brands'>
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug)

          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          )
        })}
      </section>
    </main>
  )
}

export default Collection
