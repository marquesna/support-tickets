# Support Tickets

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat&logo=javascript)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-ISC-green)](https://opensource.org/license/isc)

Uma API simples, organizada e pronta para facilitar o gerenciamento de tickets de suporte.

Este projeto foi desenvolvido para oferecer uma solução prática no cadastro, consulta, atualização e remoção de chamados, com foco em simplicidade, clareza e facilidade de uso.

## ✨ Funcionalidades

A API permite:

- Criar novos tickets de suporte;
- Listar todos os tickets cadastrados;
- Buscar tickets específicos;
- Atualizar informações de um ticket;
- Alterar o status de atendimento;
- Remover tickets quando necessário.

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript com ES Modules
- Servidor HTTP nativo
- JSON como armazenamento simples

## ▶️ Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/marquesna/support-tickets.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd support-tickets
   ```

3. Inicie o servidor:

   ```bash
   npm run dev
   ```

4. A aplicação ficará disponível em:
   ```bash
   http://localhost:3333
   ```

## 🌐 Endpoints principais

- `GET /tickets` — lista todos os tickets
- `POST /tickets` — cria um novo ticket
- `PUT /tickets/:id` — atualiza um ticket
- `PATCH /tickets/:id/status` — altera o status do ticket
- `DELETE /tickets/:id` — remove um ticket

## 💡 Exemplo de requisição

### Criar um ticket

```bash
curl -X POST http://localhost:3333/tickets \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Problema no login",
    "description": "Não consigo acessar minha conta",
    "status": "open"
  }'
```

## 🧩 Sobre o projeto

O Support Tickets nasceu como uma forma prática de demonstrar a construção de uma API funcional, com estrutura organizada e possibilidade de evolução para versões mais completas no futuro.
