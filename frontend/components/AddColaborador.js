import React, { useState } from 'react';
import axios from 'axios';

const AddColaborador = () => {
  const [cpf, setCpf] = useState('');
  const [cpfExists, setCpfExists] = useState(null);
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dataAdmissao, setDataAdmissao] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [funcao, setFuncao] = useState('');
  const [dataRescisao, setDataRescisao] = useState('');
  const [horarios, setHorarios] = useState({
    segunda: { entrada1: '', saida1: '', entrada2: '', saida2: '' },
    terca: { entrada1: '', saida1: '', entrada2: '', saida2: '' },
    quarta: { entrada1: '', saida1: '', entrada2: '', saida2: '' },
    quinta: { entrada1: '', saida1: '', entrada2: '', saida2: '' },
    sexta: { entrada1: '', saida1: '', entrada2: '', saida2: '' },
    sabado: { entrada1: '', saida1: '', entrada2: '', saida2: '' },
    domingo: { entrada1: '', saida1: '', entrada2: '', saida2: '' }
  });
  const [usuario, setUsuario] = useState('');

  const checkCpf = async () => {
    try {
      const response = await axios.get(`/api/colaboradores/cpf/${cpf}`);
      setCpfExists(response.data.exists);
    } catch (error) {
      console.error('Erro ao verificar o CPF', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newColaborador = {
      cpf,
      nome,
      dataNascimento,
      dataAdmissao,
      email,
      cargo,
      funcao,
      dataRescisao,
      horarios,
      usuario
    };
    try {
      await axios.post('/api/colaboradores', newColaborador);
      // Redirecionar ou mostrar uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao adicionar colaborador', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inserir Colaborador</h2>
      <div>
        <label>CPF*</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          onBlur={checkCpf}
        />
        <span style={{ color: cpfExists === null ? 'black' : cpfExists ? 'red' : 'green' }}>
          {cpfExists === null
            ? ''
            : cpfExists
            ? 'CPF já existe em nossa base de dados'
            : 'CPF ainda não existe em nossa base de dados'}
        </span>
      </div>
      <div>
        <label>Nome*</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label>Data de Nascimento*</label>
        <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
      </div>
      <div>
        <label>Data de Admissão*</label>
        <input type="date" value={dataAdmissao} onChange={(e) => setDataAdmissao(e.target.value)} />
      </div>
      <div>
        <label>E-mail*</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Cargo*</label>
        <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
      </div>
      <div>
        <label>Função*</label>
        <input type="text" value={funcao} onChange={(e) => setFuncao(e.target.value)} />
      </div>
      <div>
        <label>Data de Rescisão</label>
        <input type="date" value={dataRescisao} onChange={(e) => setDataRescisao(e.target.value)} />
      </div>
      <div>
        <label>Usuário</label>
        <input type="text" value={usuario} readOnly />
      </div>
      <div>
        <h3>Horários</h3>
        {Object.keys(horarios).map((dia) => (
          <div key={dia}>
            <h4>{dia.charAt(0).toUpperCase() + dia.slice(1)}</h4>
            <div>
              <label>Entrada 1</label>
              <input
                type="time"
                value={horarios[dia].entrada1}
                onChange={(e) => setHorarios({ ...horarios, [dia]: { ...horarios[dia], entrada1: e.target.value } })}
              />
              <label>Saída 1</label>
              <input
                type="time"
                value={horarios[dia].saida1}
                onChange={(e) => setHorarios({ ...horarios, [dia]: { ...horarios[dia], saida1: e.target.value } })}
              />
            </div>
            <div>
              <label>Entrada 2</label>
              <input
                type="time"
                value={horarios[dia].entrada2}
                onChange={(e) => setHorarios({ ...horarios, [dia]: { ...horarios[dia], entrada2: e.target.value } })}
              />
              <label>Saída 2</label>
              <input
                type="time"
                value={horarios[dia].saida2}
                onChange={(e) => setHorarios({ ...horarios, [dia]: { ...horarios[dia], saida2: e.target.value } })}
              />
            </div>
          </div>
        ))}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddColaborador;
