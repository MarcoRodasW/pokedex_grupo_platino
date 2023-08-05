import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route } from 'wouter'
import App from './App'
import PokemonPage from './components/Pages/PokemonPage'

export const Router = () => {
  return (
    <>
      <Route path="/" component={App} />
      <Route path="/pokemon/:id">{(params) => <PokemonPage id={params.id} />}</Route>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
