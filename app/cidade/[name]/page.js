import WeatherCard from '../../../components/WeatherCard'
import Link from 'next/link'

async function getClima(cidade) {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${key}&units=metric&lang=pt_br`, { cache: 'no-store' })
    return res.ok ? res.json() : null
  } catch (e) {
    return null
  }
}

export default async function CidadePage({ params }) {
  const nome = decodeURIComponent(params.name)
  const clima = await getClima(nome)

  return (
    <div>
      <h1 className="page-title">📍 {nome}</h1>
      <p className="page-subtitle">Detalhes completos do clima</p>
      
      {clima ? (
        <WeatherCard data={clima} detalhes={true} />
      ) : (
        <div className="error-msg">Não foi possível carregar o clima para "{nome}".</div>
      )}
      
      <br />
      <Link href="/" className="back-link">← Voltar para a busca</Link>
    </div>
  )
}
