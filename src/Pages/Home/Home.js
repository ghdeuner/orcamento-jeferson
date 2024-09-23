import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      <h1>Gerenciador de Orçamento Pessoal</h1>
      <p>
        O site permite que você gerencie suas receitas e suas despesas mensais.
        Você pode adicionar, editar e excluir entradas de receitas e despesas, e
        visualizar um resumo do seu orçamento no dashboard.
      </p>
      <h2>Como o site funciona:</h2>
      <ol>
        <li>Se registre ou faça login na sua conta</li>
        <li>Acesse o Dashboard para ver o resumo do seu orçamento</li>
        <li>Adicione suas receitas e despesas</li>
        <li>Acompanhe seu saldo e gerencie seu orçamento</li>
      </ol>
      <Link to="/dashboard" className="cta-button">
        Ir para o Dashboard
      </Link>
    </div>
  )
}