# Projeto Final de Engenharia de Software II

Este projeto tem como objetivo desenvolver uma aplicação web e implementar teste unitário, teste de integração e teste de aceitação.

## Requisitos para o desenvolvimento do projeto

- **O projeto deve ser desenvolvido com node.js;**
- **O projeto deve ser implementado com JavaScript ou TypeScript;**
- **O projeto deve ser implementado sob o padrão arquitetural MVC;**
- **O projeto deve estabelecer no mínimo 4 histórias de usuário, bem como os critérios de aceitação;**
- **O projeto deve implementar teste unitário, teste de integração e teste de aceitação para as histórias de usuário;**
- **O projeto deve implementar, no mínimo, 4 testes de integração simulando o acesso a alguma API;**
- **O projeto deve ser publicado no GitHub como público e postar o link no SIGAA;**
- **O projeto deve manter um histórico da evolução do desenvolvimento no GitHub. Por exemplo, o repositório deve possuir branches e commits que demonstram a evolução do desenvolvimento do projeto;**

O projeto deve conter o arquivo README.MD na raiz do projeto e o seu conteúdo deve possuir: finalidade da aplicação; as histórias de usuário; instruções de instalação; comandos para execução da aplicação e dos testes; bem como uma tabela com endpoints da API mockada.  

# Finalidade da Aplicação

A aplicação será uma aplicação de cadastro para torneio de jogos de luta online ou presencial, como a EVO ou a VGBootCamp.

# Histórias de Usuário

## História de Usuário 1

Como um *organizador*, quero *criar um torneio* para *que os usuários possam ingressar.*

- Critérios de Aceitação:
  - Cada campo de informação do torneio deve permitir a edição individual, proporcionando flexibilidade ao organizador.
  - Ao realizar uma edição, o sistema deve validar e aceitar mudanças válidas, exibindo feedback instantâneo.
  - As alterações feitas nos dados do torneio devem ser refletidas imediatamente na visualização correspondente.

## História de Usuário 2

Como um *usuário*, quero *ingressar em um torneio* para *competir com outros usuários.*

- Critérios de Aceitação:
  - Apos ingressar em um torneio, usuário pode remover a sua inscrição caso deseje.
  - As alterações feitas como ingressantes devem ser refletidas imediatamente na visualização dos participantes do torneio.

## História de Usuário 3

Como um *usuário*, quero *manter os meus dados pessoais* para *que as minhas informações de contato estejam corretas.*

- Critérios de Aceitação:
  - Ao criar ou editar o usuário, os dados devem ser preenchidos corretamente e de acordo com os campos solicitados.
  - As alterações feitas nos dados devem ser refletidas imediatamente na visualização correspondente.

## História de Usuário 4

Como um *organizador*, quero *verificar os participantes do meu torneio* para *remover um participante.*

- Critérios de Aceitação:
  - Ao verificar um torneio como organizador, deve ser visivel todos os participantes do mesmo, de remover ele do torneio.
  - As alterações feitas nos dados devem ser refletidas imediatamente na visualização correspondente.

# Instruções de Instalação
- Instalação: `npm install`
- Execução em ambiente de produção: `npm start`
- Execução com Nodemon: `nodemon start`

# Comandos para Execução da Aplicação e dos Testes
- Execução dos testes: `npm run`
- Testes de unidade: `test-unit`
- Testes de integração: `test-integration`
- Testes de aceitação: `test-acceptance`

# Tabela com Endpoints da API mockada

| Verb | URL | Description
| - | - | - |
| GET | /jogo/**[_id_jogo]** | Retorna as informações do jogo pela [_id_jogo] que foi informado |
| GET | /cep/**[_cep]** | Retorna os dados do [_cep] informado (Não implementada) |
| GET | /torneio/**[_id_torneio]**  | Retorna os dados do torneio, como hora, local, organizador e os jogos que compõem o torneio (Não implementada) |
| GET | /torneio/participantes/**[_id_torneio]** | Retorna todos os participantes do torenio pelo o [_id_torneio] (Não implementada) |
