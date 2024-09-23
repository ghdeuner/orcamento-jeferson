import React from 'react'
import "./Sobre.css"

export default function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre o Gerenciador de Orçamento Pessoal</h1>
      <p>
        Esta aplicação foi desenvolvida como um projeto para ajudar
        as pessoas a gerenciar melhor suas finanças pessoais.
      </p>
      <h2>Tecnologias utilizadas:</h2>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Context API</li>
        <li>CSS puro</li>
      </ul>
    </div>
  )
}