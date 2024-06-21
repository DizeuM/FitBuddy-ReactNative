# FitBuddy 🏃‍♂️💪
FitBuddy é um aplicativo de rastreamento de atividades físicas desenvolvido com React Native e Expo. Ele permite que os usuários registrem e acompanhem suas atividades físicas diárias, como caminhadas, corridas e treinos.

# Visão Geral 📋
FitBuddy é um aplicativo móvel que permite aos usuários:

- 📊 Registrar diferentes tipos de atividades físicas.
- 🕒 Acompanhar a duração, data e hora das atividades.
- 🏅 Ver um feed das atividades registradas por outros usuários.
# Tecnologias Utilizadas 🛠️
## Frontend:

- 🖥️ React Native
- 📱 Expo
- 🌐 Axios
## Backend:

- 🟢 Node.js
- 🚀 Express
- 🐬 MySQL
# Funcionalidades ✨
Registro de Atividades: Os usuários podem adicionar novas atividades com detalhes como tipo de atividade, duração, data/hora, distância (km) e frequência cardíaca (bpm).
Feed de Atividades: Visualize uma lista de atividades registradas pelos usuários.
Atualização em Tempo Real: Puxe para atualizar a lista de atividades.
# Configuração do Ambiente de Desenvolvimento ⚙️
## Pré-requisitos
- 🔄 Node.js instalado
- 🐬 MySQL instalado
- 🌐 Expo CLI instalado globalmente (npm install -g expo-cli)
# Instalação
### Clone o Repositório:

- git clone https://github.com/DizeuM/FitBuddy-ReactNative.git
  
# Configuração do Backend:

### Navegue até a pasta do backend: 

```
cd server
```
### Instale as dependências:

```
npm install
```

### Configure o arquivo .env com as suas credenciais do MySQL, se não houver, crie-o, o nome deve ser literalmente ".env":

```
DB_HOST=localhost
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_NAME=fitbuddy
```
### Crie o banco de dados:

<details>
  <summary>Script de Criação do Banco de Dados (CLIQUE NO PLAY)</summary>

CREATE DATABASE fitbuddy;

USE fitbuddy;

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
</details>


### Inicie o servidor:

```
node app.js
```

# Configuração do Frontend:

### Navegue até a pasta do frontend:

```
cd ../FitBuddy
```

### Instale as dependências:
```
npm install
```
### Inicie o Expo:

```
npx expo start
```

# Estrutura de Pastas 📂


```plaintext
fitbuddy/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── ...
├── frontend/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── screens/
│   ├── App.js
│   └── ...
└── README.md
```

# Uso 🚀
## Inicie o Backend:

Certifique-se de que o servidor MySQL está em execução.
Navegue até a pasta backend e inicie o servidor com node app.js.
## Inicie o Frontend:

Navegue até a pasta frontend e inicie o Expo com npx expo start.

Escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel para visualizar o aplicativo.

# Licença 📄
Distribuído sob a licença MIT. Veja LICENSE para mais informações.
