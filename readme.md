## Descrição

Este projeto demonstra o uso do Node.js com TypeScript para implementar uma lógica de throttle, uma técnica que limita a taxa de execução de uma determinada ação. No contexto deste código, o throttle é aplicado para controlar a execução de tarefas assíncronas em paralelo, garantindo que um número máximo de tarefas seja executado simultaneamente.

## Tecnologias Utilizadas

-   **Node.js**: Um ambiente de execução JavaScript que permite executar código JavaScript no servidor.
-   **TypeScript**: Linguagem de programação com tipagem estática opcional para JavaScript.
-   **Husky**: Uma ferramenta que permite a criação de ganchos (hooks) do Git facilmente para automatizar tarefas comuns.
-   **Commitlint**: Uma ferramenta que valida se as mensagens de commit seguem um formato específico.

## Propósito do Código

O código implementa a função `throttle`, que aceita um número de (workers) e um array de tarefas assíncronas. A função executa essas tarefas em paralelo, limitando o número de tarefas executadas simultaneamente pelo número de workers especificado.

O projeto também inclui configurações para o Husky e o Commitlint. O Husky é configurado para executar o Commitlint antes de cada commit, garantindo que as mensagens de commit sigam um formato específico, como os [Convencional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Ao fazer commits, use o formato de commits convencionais para seguir as melhores práticas de mensagens de commit.
Por exemplo:

```javascript
git commit -m "fix: husky not working"
```

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Renomeie o arquivo `env.example` para `.env` e configure as variáveis de ambiente conforme necessário.
3. Execute `npm install` para instalar as dependências do projeto.
4. Execute `npm run start` para compilar e executar o rojeto.
5. Os logs serão exibidos no console, mostrando o progresso das tarefas executadas.
