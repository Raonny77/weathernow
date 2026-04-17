import './globals.css'

export const metadata = {
  title: 'WeatherNow',
  description: 'Previsão do tempo em tempo real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="site-header">
          <a href="/">⛅ WeatherNow</a>
          <nav>
            <a href="/">Início</a>
            <a href="/sobre">Sobre</a>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <p>WeatherNow © {new Date().getFullYear()} — Dados: OpenWeatherMap</p>
        </footer>
      </body>
    </html>
  )
}
