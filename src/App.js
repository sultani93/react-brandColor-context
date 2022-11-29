import './App.css'
import './components/Sidebar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import MainContext from './MainContext'
import { useState, useEffect } from 'react'
import BrandsData from './brand.json'
import Copied from './components/Copied'
import Collection from './components/Collection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { forceVisible } from 'react-lazyload'

function App() {
  const brandsArray = []
  Object.keys(BrandsData).map((item) => brandsArray.push(BrandsData[item]))

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }
  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    )
  }, [search])

  useEffect(() => {
    forceVisible()
  }, [brands])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copied])

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/' exact element={<Content />} />
            <Route path='/collection/:slugs' element={<Collection />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  )
}

export default App
