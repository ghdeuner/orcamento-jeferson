import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Receitas from '../../components/Receitas';
import Despesas from '../../components/Despesas';
import "./Dashboard.css"

const Dashboard = () => {
  const { receitas, despesas } = useAppContext();

  const totalReceitas = receitas.reduce((total, receita) => total + parseFloat(receita.valor), 0);
  const totalDespesas = despesas.reduce((total, despesa) => total + parseFloat(despesa.valor), 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="resumo">
        <h2>Resumo</h2>
        <p>Total de Receitas: R$ {totalReceitas.toFixed(2)}</p>
        <p>Total de Despesas: R$ {totalDespesas.toFixed(2)}</p>
        <p>Saldo: R$ {saldo.toFixed(2)}</p>
      </div>
      <Receitas />
      <Despesas />
    </div>
  );
};

export default Dashboard;