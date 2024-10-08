import React from 'react'
import Hero from '../components/Hero'
import ProductsOverview from '../components/ProductsOverview'
import CaseStudies from '../components/CaseStudies'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsOverview />
      <CaseStudies />
    </div>
  )
}

export default Home