import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Carrega os usuários do localStorage quando o componente é montado
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  // Salva os usuários no localStorage sempre que o estado 'users' é atualizado
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const adicionarReceita = (receita) => {
    setReceitas([...receitas, receita]);
  };

  const adicionarDespesa = (despesa) => {
    setDespesas([...despesas, despesa]);
  };

  const excluirReceita = (id) => {
    setReceitas(receitas.filter(r => r.id !== id));
  };

  const excluirDespesa = (id) => {
    setDespesas(despesas.filter(d => d.id !== id));
  };

  const editarReceita = (id, receitaAtualizada) => {
    setReceitas(receitas.map(r => r.id === id ? receitaAtualizada : r));
  };

  const editarDespesa = (id, despesaAtualizada) => {
    setDespesas(despesas.map(d => d.id === id ? despesaAtualizada : d));
  };

  const login = (email, senha) => {
    const user = users.find(u => u.email === email && u.senha === senha);
    if (user) {
      setIsAuthenticated(true);
      setUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = (userData) => {
    if (users.some(u => u.email === userData.email)) {
      return false; // Usuário já existe
    }
    const newUsers = [...users, userData];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers)); // Salva imediatamente no localStorage
    return true;
  };

  return (
    <AppContext.Provider value={{
      receitas,
      despesas,
      adicionarReceita,
      adicionarDespesa,
      excluirReceita,
      excluirDespesa,
      editarReceita,
      editarDespesa,
      isAuthenticated,
      user,
      login,
      logout,
      register
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);