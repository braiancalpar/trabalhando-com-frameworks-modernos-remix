# Hermex — migração de React para Remix

Este repositório registra o projeto desenvolvido durante o curso **Modernizando rotas e dados com Remix**, da Alura. O objetivo foi migrar o **Hermex**, uma aplicação de aluguel de carros originalmente construída com React, Vite e React Router, para uma aplicação full stack baseada em Remix, utilizando o modo framework do React Router.

Durante a migração, as rotas, a busca de dados e o tratamento de erros deixaram de depender apenas do navegador e passaram a usar os recursos do framework, principalmente rotas baseadas em arquivos e `loaders` executados no servidor.

## O que foi desenvolvido

O repositório contém duas versões da aplicação:

- `react-hermex`: projeto React original, mantido como referência para a migração;
- `remix-hermex`: versão migrada e desenvolvida ao longo do curso;
- `database`: base local com carros, categorias e imagens, servida pelo JSON Server.

### Preparação e camada de dados

- Configuração do projeto original e da nova aplicação Remix;
- criação de uma API local com JSON Server, contendo categorias e nove modelos de carros;
- definição das interfaces TypeScript `Car` e `Category`;
- implementação de um serviço de API exclusivo do servidor para consultar carros e categorias;
- criação de erros personalizados e respostas HTTP padronizadas;
- adição de funções para formatação de preços, números, datas, anos e transmissões;
- criação de validadores de ID, preço, URL de imagem e ano, além de sanitização de texto;
- implementação de utilitários para criação de slugs, truncamento de texto, `debounce` e identificação do ambiente de servidor.

### Componentes e identidade visual

Os componentes da versão React foram adaptados para a nova estrutura:

- cabeçalho com logotipo, busca e acesso às categorias;
- formulário de busca com local, data e horário de retirada e devolução;
- banner da página inicial;
- breadcrumbs para navegação contextual;
- cards de carros e categorias;
- skeletons para estados de carregamento;
- ícones com React Icons;
- imagens, logotipos e modelos de veículos;
- tema responsivo com Tailwind CSS, cores próprias e as fontes Inter e Chakra Petch.

### Rotas e carregamento no servidor

Foram criadas rotas baseadas em arquivos para os principais fluxos da aplicação:

| Rota | Funcionalidade |
| --- | --- |
| `/` | Página inicial com busca, banner e os seis primeiros veículos |
| `/categories` | Lista de categorias e quantidade de carros em cada uma |
| `/categories/:id` | Detalhes da categoria e seus veículos disponíveis |
| `/car/:id` | Informações completas, especificações, recursos e valor da diária do carro |
| `/search` | Resultado da busca com filtros e ordenação |

Cada página consulta a API por meio de um `loader`, permitindo carregar os dados no servidor antes da renderização. Também foram adicionadas validações de parâmetros e interfaces de erro para carros ou categorias inexistentes e para falhas na comunicação com a API.

Na busca, é possível:

- pesquisar por nome, nome curto, descrição ou recurso do veículo;
- filtrar os resultados por categoria;
- ordenar por menor preço, maior preço ou nome;
- visualizar um estado vazio quando nenhum carro corresponde aos critérios.

## Tecnologias utilizadas

- React 19;
- TypeScript;
- Remix com React Router em modo framework;
- Vite;
- Tailwind CSS;
- React Icons;
- JSON Server.

## Como executar o projeto

### Pré-requisitos

Tenha o [Node.js](https://nodejs.org/) e o npm instalados.

### 1. Instale as dependências

Na raiz do repositório, instale as dependências do servidor da base de dados:

```bash
npm install
```

Depois, instale as dependências da aplicação Remix:

```bash
cd remix-hermex
npm install
```

### 2. Inicie a base de dados

Em um terminal, a partir da raiz do repositório, execute:

```bash
npm run server
```

A API ficará disponível em `http://localhost:3001`. Mantenha esse terminal em execução.

### 3. Inicie o Remix Hermex

Em outro terminal, acesse a pasta da aplicação e inicie o servidor de desenvolvimento:

```bash
cd remix-hermex
npm run dev
```

A aplicação ficará disponível, por padrão, em `http://localhost:5173`.

> A base de dados deve estar em execução para que os `loaders` consigam buscar carros e categorias.

## Outros comandos

Dentro de `remix-hermex`, também estão disponíveis:

```bash
npm run typecheck  # gera os tipos das rotas e verifica o TypeScript
npm run build      # cria a versão de produção
npm run start      # executa a versão de produção após o build
```
