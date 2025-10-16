# test-driven-js

## Sobre o Projeto

Este repositório contém um exemplo prático de como aplicar o desenvolvimento orientado a testes (TDD) em JavaScript. O foco é demonstrar a criação de uma aplicação de lista de tarefas (To-Do) utilizando testes unitários com Mocha e Chai, e mocks com Sinon.

## Objetivos

- Aplicar TDD para desenvolver funcionalidades de CRUD em uma aplicação de To-Do.
- Utilizar Mocha e Chai para testes unitários.
- Integrar mocks e stubs com Sinon para isolar dependências.
- Validar entradas e gerenciar status das tarefas com base na data.

## 🛠 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Mocha**: Framework de testes.
- **Chai**: Biblioteca de asserções.
- **Sinon**: Biblioteca para spies, stubs e mocks.
- **UUID**: Geração de identificadores únicos.

## ⚙️ Estrutura do Projeto

/test
├── todo.test.js # Testes para a classe Todo
├── todoRepository.test.js # Testes para o repositório de tarefas
└── todoService.test.js # Testes para o serviço de tarefas
/src
├── todo.js # Classe Todo
├── todoRepository.js # Repositório de tarefas
└── todoService.js # Serviço de tarefas
package.json # Dependências e scripts
README.md # Documentação do projeto


## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/viitorlimaa/test-driven-js.git
   cd test-driven-js
Instale as dependências:

``npm install``

Execute os testes:

``npm test``

## 🧪 Como Funciona

``Testes``: São escritos antes da implementação das funcionalidades, seguindo o ciclo "Red, Green, Refactor".

``Mocks e Stubs``: Utilizados para isolar componentes e testar unidades de forma independente.

``Validação de Dados``: A classe Todo valida entradas e define o status da tarefa com base na data fornecida.