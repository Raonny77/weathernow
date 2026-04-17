'use client'
import { useState } from 'react'

export default function SearchBar({ onSearch, loading }) {
  const [cidade, setCidade] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cidade.trim()) onSearch(cidade.trim())
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome de uma cidade..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Buscando...' : '🔍 Buscar'}
      </button>
    </form>
  )
}
