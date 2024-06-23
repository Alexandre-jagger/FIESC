# FIESC
Teste pratico Fiesc

Requisitos para funcionamento



Sql -
CREATE TABLE Colaboradores (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    data_admissao DATE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    funcao VARCHAR(255) NOT NULL,
    data_rescisao DATE,
    usuario VARCHAR(255) UNIQUE NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);
-------------------------------------------------------------------------
CREATE TABLE Horarios (
    id SERIAL PRIMARY KEY,
    colaborador_id INT REFERENCES Colaboradores(id) ON DELETE CASCADE,
    dia_semana VARCHAR(10) NOT NULL,
    entrada1 TIME,
    saida1 TIME,
    entrada2 TIME,
    saida2 TIME
);
-------------------------------------------------------------------------
CREATE TABLE RegistroPonto (
    id SERIAL PRIMARY KEY,
    colaborador_id INT REFERENCES Colaboradores(id) ON DELETE CASCADE,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    tipo_registro VARCHAR(10) NOT NULL -- Pode ser 'entrada' ou 'saida'
);
-------------------------------------------------------------------------

No terminal 

psql -U "seu_usuario"
\c nome_do_banco

-------------------------------------------------------------------------

Backend
No terminal 

cd backend
npm install
npx sequelize-cli db:migrate
npm start

-------------------------------------------------------------------------

Frontend
No terminal 

cd frontend
npm install
npm start







