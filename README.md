# 🔐 Projeto de Criptografia com Cifra de César

Repositório do app (front-end): [https://github.com/juramal/criptografia](https://github.com/juramal/criptografia)

O projeto tem como objetivo implementar a criptografia e decriptação de mensagens utilizando a **Cifra de César**, com interface interativa e persistência de dados em banco. O sistema é composto por uma **API em Node.js/TypeScript com Express** e um **frontend mobile desenvolvido em React Native com Expo**.

---

## 🚀 Funcionalidades

- ✅ Cadastro e login de usuários com autenticação JWT.
- ✅ Criptografia de mensagens com passo definido pelo usuário.
- ✅ Geração de hash único para cada mensagem criptografada (utilizável apenas uma vez).
- ✅ Armazenamento de mensagens e hashes no banco de dados.
- ✅ Decriptação de mensagens utilizando hash e validação de uso único.
- ✅ **Envio da mensagem criptografada para o WhatsApp**, incluindo a mensagem cifrada e o hash.  
  🔄 O receptor pode colar a mensagem recebida no app, e com um clique, os campos de decriptação são automaticamente preenchidos.

---

## 🧠 Arquitetura do Projeto

> 🔧 Projeto baseado em arquitetura **MVC** com banco de dados **MySQL**.

📌 **Importante**: Tanto a API quanto o banco de dados estão configurados **localmente**. Para funcionamento adequado:

1. Configure o seu ambiente local com um banco MySQL.
2. Altere o arquivo `.env-exemplo` para `.env` com as seguintes variáveis :
   ```
   DATABASE_URL="mysql://usuario:senha@localhost:3306/nomedobanco"
   JWT_SECRET="sua_chave_secreta"
   PORT=porta_da_api
   ```

📷 **[INSERIR IMAGEM DA ARQUITETURA AQUI]**

---

## 🖼️ Telas do Aplicativo

- **Tela de Registro**  
  📷 _[INSERIR IMAGEM DA TELA DE REGISTRO AQUI]_

- **Tela de Login**  
  📷 _[INSERIR IMAGEM DA TELA DE LOGIN AQUI]_

- **Tela de Criptografia**  
  📷 _[INSERIR IMAGEM DA TELA DE CRIPTOGRAFIA AQUI]_

- **Tela de Decriptação**  
  📷 _[INSERIR IMAGEM DA TELA DE DECRIPTAÇÃO AQUI]_

---

## ⚙️ Tecnologias Utilizadas

### Backend

- ![Node.js](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/nodejs.svg) **Node.js**
- ![Express](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/express.svg) **Express**
- ![TypeScript](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/typescript.svg) **TypeScript**
- ![Prisma](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/prisma.svg) **Prisma ORM**
- ![MySQL](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/mysql.svg) **MySQL**
- ![JWT](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/jwt.svg) **JWT**
- ![Swagger](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/swagger.svg) **Swagger**

### Frontend (Mobile)

- ![React](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/react.svg) **React Native**
- ![Expo](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/expo.svg) **Expo**
- ![JavaScript](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/javascript.svg) **JavaScript**
- ![React Navigation](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/reactrouter.svg) **React Navigation**
- ![React Native Paper](https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/react.svg) **React Native Paper**

---

## 📚 Requisitos Atendidos

Conforme definido no escopo do projeto, foram implementadas as seguintes funcionalidades:

- Interface com **quatro telas principais**: **Registrar**, **Login**, **Criptografar** e **Decriptografar**.
- Hash criptográfico com uso único, armazenado e validado em banco.
- Integração com WhatsApp que facilita o preenchimento da decriptação.
- Persistência segura com MySQL e Prisma ORM.

---

## 📌 Observações Finais

- O sistema está operando com **API e banco de dados locais**, exigindo configuração manual do ambiente e `.env`.
- A exportação via WhatsApp está funcional com automação parcial e pode ser expandida futuramente.
- Cada hash gerado é único e só pode ser utilizado uma única vez, reforçando a segurança da decriptação.
