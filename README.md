<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

```html
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
```

```html
<p align="center">
```

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Criação do projeto utilizando o NESTJS, um dos melhores frameworks para se trabalhar, ele utiliza Typescript, a linguagem de programação que vamos utilizar e pode ser executado em frameworks HTTP como expressJS ou Fastify. Também utilizando a integração do Prisma e Postgresql.

## Installation

Para iniciar com o NestJS devemos instalar a NestJS CLI de forma global:

```bash
npm i -g @nestjs/cli
```

Crie e abra uma pasta no VSCode onde você deseja que o repositório que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde está `project-name` mude para o nome do seu projeto.

```basic
nest new project-name
```

Logo após ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua preferência, nesse exemplo utilizaremos o `npm`.

Neste momento, foi criado uma nova pasta com o seu projeto, você deve garantir que a pasta que foi criada, esteja aberta no VSCode:

```basic
cd "my-nest-project"
```

Para testar se o seu projeto está rodando, entre com o comando:

```bash
npm run start:dev
```

Ele deverá por padrão em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta `dist`, onde contém arquivos `.js`, `.map` e `.d.ts.

Explorando um pouco a estrutura do NestJS, percebemos que temos 5 arquivos que foram gerados automaticamente dentro da pasta src: 

![img](https://blueedtech.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mj_r__f7dzSt2HUbwjg%2Fuploads%2FSzHtCS9EudOxrUvSywZr%2Fimg10.PNG?alt=media&token=9e3d8e21-772e-4992-b3e2-90260bacd047)

São eles: 

- app.controller.spec.ts, 
- app.controller.ts, 
- app.module.ts, 
- app.service.ts 
- E dentro dessa aplicação temos o arquivo mais importante que é o "coração" do projeto o main.ts.