import Link from 'next/link'
import Image from 'next/image'

export default function WeatherCard({ data, detalhes }) {
  const { name, main, weather, sys, wind } = data
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  return (
    <div className="weather-card">
      <div className="city-name">{name}</div>
      {detalhes && <div className="country">📍 {sys.country}</div>}
      
      <div className="main-info">
        <div className="temp">{Math.round(main.temp)}°C</div>
        <div className="icon">
          <Image src={iconUrl} alt={weather[0].description} width={80} height={80} />
        </div>
      </div>

      <div className="description">{weather[0].description}</div>

      <div className="details">
        <div className="detail-item">
          <div className="detail-label">Sensação térmica</div>
          <div className="detail-value">{Math.round(main.feels_like)}°C</div>
        </div>
        {detalhes && (
          <>
            <div className="detail-item">
              <div className="detail-label">Umidade</div>
              <div className="detail-value">{main.humidity}%</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Vento</div>
              <div className="detail-value">{wind.speed} m/s</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">País</div>
              <div className="detail-value">{sys.country}</div>
            </div>
          </>
        )}
      </div>

      {!detalhes && (
        <Link href={`/cidade/${encodeURIComponent(name)}`} className="link-detalhes">
          Ver detalhes completos →
        </Link>
      )}
    </div>
  )
}
