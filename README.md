# Gerenciador de Orçamento Pessoal

## Descrição

O Gerenciador de Orçamento Pessoal é uma aplicação web desenvolvida em React que permite os usuários gerenciar suas finanças pessoais de forma eficiente. Com esta aplicação, os usuários podem adicionar, editar e excluir receitas e despesas, visualizar um resumo de seu orçamento e acompanhar seu saldo financeiro.

## Funcionalidades

- Autenticação de usuários (login e registro).
- Adição, edição e exclusão de receitas.
- Adição, edição e exclusão de despesas.
- Visualização de resumo financeiro no dashboard.
- Interface responsiva para uso em dispositivos móveis e desktop.

## Tecnologias Utilizadas

- React.
- React Router.
- Context API para gerenciamento de estado.
- CSS puro para estilização.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 12 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/ghdeuner/gerenciador_orcamento.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd gerenciador-orcamento-pessoal
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento, execute:

```
npm start
```

A aplicação será aberta automaticamente no seu navegador padrão. Caso isso não ocorra, acesse [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `/src`: Contém o código-fonte da aplicação.
  - `/components`: Componentes React.
  - `/context`: Contexto da aplicação (AppContext).
  - `/pages`: Componentes de página para cada rota.
  - `App.js`: Componente principal da aplicação.
- `/public`: Arquivos públicos, incluindo o `index.html`.

## Uso

1. Registre-se ou faça login na aplicação.
2. Na página inicial, você verá um resumo do seu orçamento.
3. Use o menu de navegação para acessar diferentes seções da aplicação.
4. Adicione suas receitas e despesas nas respectivas páginas.
5. Visualize seu saldo e gerencie seu orçamento no dashboard.
