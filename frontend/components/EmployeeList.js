import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EmployeeList = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await axios.get('http://localhost:3000/api/colaboradores');
      setColaboradores(result.data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que quer excluir este colaborador?')) {
      await axios.delete(`http://localhost:3000/api/colaboradores/${id}`);
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    }
  };

  return (
    <div>
      <h2>Colaboradores</h2>
      <button onClick={() => history.push('/adicionar-colaborador')}>Inserir novo colaborador</button>
      <table>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map(colaborador => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nome}</td>
              <td>{colaborador.email}</td>
              <td>{colaborador.telefone}</td>
              <td>
                <button onClick={() => history.push(`/editar-colaborador/${colaborador.id}`)}>✏️</button>
                <button onClick={() => handleDelete(colaborador.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
