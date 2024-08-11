# Container (Extranet)

Este projeto simula a aplicação web da **Extranet**, contendo apenas os componentes necessários para rodar um micro frontend.

## Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/)

## Passos para montar o ambiente local

1. Instalar o Yarn

```sh
npm install -g Yarn
```

2. Configurar seu _personal access token_ para instalação dos pacotes do Flora, seguindo as instruções deste [link](https://github.com/grupoboticario/flora/wiki/NPM-Registry)

3. Instalar dependências:

```sh
yarn install
```

4. Configurar atenticação via Identity

   1. Pedir as credenciais e dados de configuração do Indentity a alguém da equipe Extranet.
   2. Em `src/environment`, atualizar os valores de `authentication` com os dados do ambiente do Identity.
   3. Em `src/services/openId`, atualizar os valores de `environment` com os dados do ambiente do Identity.

5. Start da aplicação:

```sh
yarn start
```

6. Aplicação disponível em **http://localhost:3000**

## Passos para conectar um novo micro frontend

1. Em `components/Navbar/Navbar.tsx`, há dois botões (`<NavbarItem>`), um que leva a uma página do container (Extranet) e outro ao micro frontend exemplo.

2. Em `components/Navbar/data.ts`, adicionar as seguintes informações ao objeto `data`:

- `label` - Texto mostrado no botão.
- `route` - Rota do novo micro frontend.

3. Em `components/Navbar/Navbar.tsx`, adicionar um novo `<NavbarItem>` com os dados do novo micro frontend.

4. Em `environments/environments.ts`, adicionar em `microFrontendUrl` a URL local onde o novo micro frontend está hospedado.

5. Em `routes/data.tsx`, adicionar um novo objeto a constante `MICRO_FRONTENDS` com as seguintes informações:

- `path` - Rota que aponta ao novo micro frontend (mesmo valor criado no passo 2, `route`).
- `host` - URL onde o novo micro frontend está hospedado (mesmo valor criado no passo 4).

6. Navegar para o novo micro frontend através do botão criado.
