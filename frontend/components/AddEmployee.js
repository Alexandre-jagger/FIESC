import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = ({ history }) => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cargo, setCargo] = useState('');
  const [funcao, setFuncao] = useState('');
  const [dataAdmissao, setDataAdmissao] = useState('');
  const [dataRescisao, setDataRescisao] = useState('');

  const handleAdd = async () => {
    try {
      const newEmployee = { cpf, nome, email, telefone, cargo, funcao, dataAdmissao, dataRescisao };
      await axios.post('http://localhost:3000/api/colaboradores', newEmployee);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Adicionar Colaborador</h2>
      <form>
        <label>CPF *</label>
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <label>Nome *</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>E-mail *</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Telefone</label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <label>Cargo *</label>
        <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        <label>Função *</label>
        <input type="text" value={funcao} onChange={(e) => setFuncao(e.target.value)} />
        <label>Data de Admissão *</label>
        <input type="date" value={dataAdmissao} onChange={(e) => setDataAdmissao(e.target.value)} />
        <label>Data de Rescisão</label>
        <input type="date" value={dataRescisao} onChange={(e) => setDataRescisao(e.target.value)} />
        <button type="button" onClick={handleAdd}>Salvar</button>
      </form>
    </div>
  );
};

export default AddEmployee;
