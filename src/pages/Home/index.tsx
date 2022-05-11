import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import api from '../../services/api'

export const Home = () => {

  useEffect(() => {
    const getPlatforms = async () => {
      const { data } = await api.get('/plataformas')
      return data
    }

    getPlatforms()
  })

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}