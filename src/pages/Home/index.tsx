import { useEffect, useState } from 'react'
import { Header, Hero, Section, PlatformCards } from '../../components'
import {} from '../../components/PlatformCards/PlatformCard'
import api from '../../services/api'
import {} from './styles'

export const Home = () => {
  const [platforms, setPlatforms] = useState([])

  useEffect(() => {
    const getPlatforms = async () => {
      const { data } = await api.get('/plataformas')
      return setPlatforms(data.plataformas)
    }

    getPlatforms()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Section title="Qual sua plataforma?" >
        <PlatformCards platforms={platforms} />
      </Section>
    </>
  )
}