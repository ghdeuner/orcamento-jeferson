import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Despesas = () => {
  const { despesas, adicionarDespesa, excluirDespesa, editarDespesa } = useAppContext();
  const [novaDespesa, setNovaDespesa] = useState({ descricao: '', valor: '' });
  const [editando, setEditando] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaDespesa.descricao && novaDespesa.valor) {
      if (editando) {
        editarDespesa(editando.id, { ...novaDespesa, id: editando.id });
        setEditando(null);
      } else {
        adicionarDespesa({ ...novaDespesa, id: Date.now() });
      }
      setNovaDespesa({ descricao: '', valor: '' });
    }
  };

  const handleEditar = (despesa) => {
    setNovaDespesa({ descricao: despesa.descricao, valor: despesa.valor });
    setEditando(despesa);
  };

  return (
    <div className="despesas">
      <h2>Despesas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição"
          value={novaDespesa.descricao}
          onChange={(e) => setNovaDespesa({ ...novaDespesa, descricao: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={novaDespesa.valor}
          onChange={(e) => setNovaDespesa({ ...novaDespesa, valor: e.target.value })}
          required
        />
        <button type="submit">{editando ? 'Salvar Alterações' : 'Adicionar Despesa'}</button>
      </form>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>
            {despesa.descricao}: R$ {parseFloat(despesa.valor).toFixed(2)}
            <div style={{ display: 'inline-block' }}>
              <button onClick={() => handleEditar(despesa)}>Editar</button>
              <button onClick={() => excluirDespesa(despesa.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Despesas;
