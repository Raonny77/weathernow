'use client'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'

export default function Home() {
  const [clima, setClima] = useState(null)
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  async function buscarClima(cidade) {
    setLoading(true)
    setErro('')
    setClima(null)

    try {
      const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${key}&units=metric&lang=pt_br`)
      const data = await res.json()

      if (!res.ok) {
        setErro('Cidade não encontrada. Verifique o nome e tente novamente.')
      } else {
        setClima(data)
      }
    } catch (err) {
      setErro('Erro ao buscar dados. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="page-title">⛅ WeatherNow</h1>
      <p className="page-subtitle">Consulte o clima de qualquer cidade do mundo a qualquer momento.</p>
      
      <SearchBar onSearch={buscarClima} loading={loading} />
      
      {loading && <p className="loading">só um segundo...</p>}
      {erro && <div className="error-msg">{erro}</div>}
      {clima && <WeatherCard data={clima} />}
    </div>
  )
}
