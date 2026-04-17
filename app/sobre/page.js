import Link from 'next/link'

export default function Sobre() {
  return (
    <div>
      <h1 className="page-title">Sobre o Projeto</h1>
      <p className="page-subtitle">Informações acadêmicas e descrição da aplicação.</p>
      
      <div className="sobre-card">
        <h2>👤 Dados do Aluno</h2>
        <p><strong>Nome:</strong> Raonny A. da Silva</p>
        <p><strong>Curso:</strong> Programação e design pra web II</p>
        <p><strong>Período:</strong> 3º Período</p>
        
        <div className="projeto-desc">
          <p>
            <strong>Sobre o WeatherNow:</strong> Aplicação web desenvolvida com Next.js 14 e App Router 
            que consome a API da OpenWeatherMap para exibir dados de clima em tempo real.
          </p>
        </div>
      </div>
      
      <Link href="/" className="back-link">← Voltar para a página principal</Link>
    </div>
  )
}
