# ⛅ WeatherNow

Aplicação de previsão do tempo em tempo real desenvolvida com **Next.js 14 App Router**, consumindo a API gratuita da [OpenWeatherMap](https://openweathermap.org/).


Aqui segue Link do projeto VERCEL "https://weathernow-climatempo.vercel.app/"
---
link salvo na plataforma rodando 

## 📁 Estrutura do Projeto

```
weathernow/
├── app/
│   ├── layout.js          # Layout global
│   ├── page.js            # Página principal (busca)
│   ├── globals.css        # Estilos globais
│   ├── sobre/
│   │   └── page.js        # Página sobre o projeto
│   └── cidade/
│       └── [name]/
│           └── page.js    # Rota dinâmica por cidade
├── components/
│   ├── SearchBar.js       # Componente de busca
│   └── WeatherCard.js     # Componente de exibição do clima
├── .env.local.example     # Exemplo de variável de ambiente
└── README.md
```

---

## 🔑 Configurando a API Key

1. Acesse [https://openweathermap.org/api](https://openweathermap.org/api) e crie uma conta gratuita.
2. Gere uma chave de API (API Key) no painel.
3. Na raiz do projeto, crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_WEATHER_API_KEY=2d150634c5f3c09b100799278956ae9b
```

> ⚠️ A chave pode levar até 10 minutos para ativar após o cadastro.

---

## ▶️ Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

Abra [http://localhost:3000] no navegador.

---

## ✨ Funcionalidades

-  Busca de cidade com input + botão
-  Exibe: temperatura, sensação térmica, descrição e ícone
-  Página de detalhes com umidade, vento e país
-  Página `/sobre` com dados do aluno
-  Estilização 100% em `globals.css`
