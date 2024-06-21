npm install - INSTALA TUDO QUE FOR NECESSÁRIO P RODAR O BGL

database.js - Ajusta ai pra tua máquina o database.js

BANCO DE DADOS - Não sei usar migrations então toma ai as tabelas criadas manualmente:

-- Tabela users
CREATE TABLE IF NOT EXISTS users (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    imc FLOAT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Tabela exercicios
CREATE TABLE IF NOT EXISTS exercicios (
    exercicio_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    video_URL VARCHAR(255) NOT NULL,
    grupo_muscular VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    peso INTEGER NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Tabela historico_usuarios com ON DELETE CASCADE
CREATE TABLE IF NOT EXISTS historico_usuarios (
    historico_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    peso FLOAT NOT NULL,
    imc FLOAT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (usuario_id) ON DELETE CASCADE
);

-- Tabela treinos
CREATE TABLE IF NOT EXISTS treinos (
    treino_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data DATETIME NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users (usuario_id) ON DELETE CASCADE,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Tabela sets com ON DELETE CASCADE na chave estrangeira treino_id
CREATE TABLE IF NOT EXISTS sets (
    set_id INT AUTO_INCREMENT PRIMARY KEY,
    treino_id INT NOT NULL,
    exercicio_id INT NOT NULL,
    repeticao INT NOT NULL,
    serie INT NOT NULL,
    tempo_descanco INT NOT NULL,
    observacao VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (treino_id) REFERENCES treinos (treino_id) ON DELETE CASCADE,
    FOREIGN KEY (exercicio_id) REFERENCES exercicios (exercicio_id)
);
-- Tabela atividades com ON DELETE CASCADE
CREATE TABLE IF NOT EXISTS atividades (
    atividade_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    tipo_atividade VARCHAR(255) NOT NULL,
    duracao TIME NOT NULL,
    data_hora DATE NOT NULL,
    km FLOAT,
    bpm INT,
    relogio VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    nome_usuario VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (usuario_id) ON DELETE CASCADE
);



Roda o servidor com: node app.js