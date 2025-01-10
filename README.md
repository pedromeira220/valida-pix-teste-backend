# Backend - Projeto

## Tecnologias Utilizadas

-   **Docker**: Containerização do ambiente de desenvolvimento.
-   **Docker Compose**: Facilita a execução dos containers em conjunto.
-   **PostgreSQL**: Banco de dados.
-   **Prisma ORM**: ORM para interação com o banco de dados.
-   **Express**: Framework para a criação da API.
-   **Zod**: Biblioteca para validação de dados.
-   **Arquitetura Limpa**: Uso de alguns conceitos da Clean Arch.

## Pré-requisitos

-   Docker
-   Docker Compose

## Como Rodar o Backend

1.  Clone o repositório:
    
    `git clone <url-do-repositorio-backend>
    cd <diretorio-do-backend>` 
    
2.  Crie o arquivo `.env` com as variáveis de ambiente necessárias:
   
    `cp .env.example .env` 
    
3.  Inicie os containers Docker:
    
    `docker-compose up --build -d` 
    
4.  O backend estará disponível em `http://localhost:3333`.
    
5.  Para rodar as migrações do Prisma, execute:    
    `npm run prisma:migrate:dev` 

## Funcionalidades

- Sistema de autenticação (login e registro de conta) com JWT.
- Validação de dados com Zod.
- Cadastrar pix na lista do cliente
- Buscar pix da lista do cliente

## Possíveis problemas

- Caso o Docker não seja iniciado, tente rodar o comando com `sudo`
- Pode ser necessário rodar o seguinte comando dentro do ambiente do docker `docker exec -it valida-pix-teste-server /bin/sh` e logo em seguida dentro do container `npm rebuild esbuild`
