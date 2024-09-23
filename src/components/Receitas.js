import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Receitas = () => {
  const { receitas, adicionarReceita, excluirReceita, editarReceita } = useAppContext();
  const [novaReceita, setNovaReceita] = useState({ descricao: '', valor: '' });
  const [editando, setEditando] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaReceita.descricao && novaReceita.valor) {
      if (editando) {
        editarReceita(editando.id, { ...novaReceita, id: editando.id });
        setEditando(null);
      } else {
        adicionarReceita({ ...novaReceita, id: Date.now() });
      }
      setNovaReceita({ descricao: '', valor: '' });
    }
  };

  const handleEditar = (receita) => {
    setNovaReceita({ descricao: receita.descricao, valor: receita.valor });
    setEditando(receita);
  };

  return (
    <div className="receitas">
      <h2>Receitas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição"
          value={novaReceita.descricao}
          onChange={(e) => setNovaReceita({ ...novaReceita, descricao: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={novaReceita.valor}
          onChange={(e) => setNovaReceita({ ...novaReceita, valor: e.target.value })}
          required
        />
        <button type="submit">{editando ? 'Salvar Alterações' : 'Adicionar Receita'}</button>
      </form>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            {receita.descricao}: R$ {parseFloat(receita.valor).toFixed(2)}
            <div style={{ display: 'inline-block' }}>
              <button onClick={() => handleEditar(receita)}>Editar</button>
              <button onClick={() => excluirReceita(receita.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receitas;
