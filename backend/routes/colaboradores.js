const express = require('express');
const router = express.Router();
const { Colaborador } = require('../models');

router.post('/', async (req, res) => {
  const { cpf, nome, dataNascimento, dataAdmissao, email, cargo, funcao, dataRescisao, horarios } = req.body;

  try {
    const usuario = generateUsuario(nome); // Função para gerar o nome de usuário
    const novoColaborador = await Colaborador.create({
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
    });
    res.status(201).json(novoColaborador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar colaborador' });
  }
});

function generateUsuario(nome) {
  const baseUser = nome.toLowerCase().replace(/\s+/g, '_');
  // Adicione lógica para garantir que o nome de usuário seja único
  return baseUser;
}

module.exports = router;
