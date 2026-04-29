# Teste Backend Ticket

API Backend serverless para gerenciamento de requisições e tickets, desenvolvida com Node.js, TypeScript e AWS Lambda.

## 📋 Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Execução Local](#execução-local)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Exemplos de Requests](#exemplos-de-requests)
- [Deploy](#deploy)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 📦 Requisitos

- **Node.js** >= 22.x
- **npm** >= 10.x
- **PostgreSQL** >= 12.x (para execução local)
- **Git**

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio-url>
cd teste-backend-ticket
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais locais:

```env
DATABASE_URL=postgresql://postgres:sua_senha@localhost:5432/teste_backend_db
```

## 🏃 Execução Local

### 1. Inicializar o Banco de Dados

Crie o banco de dados PostgreSQL e execute as migrações:

```bash
# Gerar migrações (se necessário)
npm run db:generate

# Executar migrações
npm run db:migrate

# Popular o banco com dados de teste (opcional)
npm run db:seed
```

### 2. Iniciar o Servidor de Desenvolvimento

Execute o servidor local com o Serverless Offline:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 🗄️ Configuração do Banco de Dados

### Variáveis de Ambiente

| Variável       | Descrição                 | Exemplo                                    |
| -------------- | ------------------------- | ------------------------------------------ |
| `DATABASE_URL` | URL de conexão PostgreSQL | `postgresql://user:pass@localhost:5432/db` |

### Comandos Úteis

```bash
# Visualizar schema do banco em interface gráfica
npm run db:studio

# Gerar migrations após alterações no schema
npm run db:generate

# Fazer push das migrações para o banco
npm run db:push

# Sincronizar schema remoto
npm run db:pull
```

## 📝 Exemplos de Requests

### Listar Todas as Requisições

```http
GET http://localhost:3000/requests?page=1&perPage=10
```

**Parâmetros:**

- `page` (obrigatório): Número da página
- `perPage` (obrigatório): Quantidade de itens por página
- `createdBy` (opcional): Filtrar por criador
- `priority` (opcional): Filtrar por prioridade (low, medium, high)

**Resposta (200):**

```json
{
  "data": [
    {
      "id": "ipjhy4t7mfoddh52tobrcehv",
      "title": "Request title",
      "description": "Request description",
      "priority": "high",
      "createdBy": "user-2",
      "createdAt": "2024-04-29T10:30:00Z",
      "updatedAt": "2024-04-29T10:30:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "perPage": 10,
    "total": 1
  }
}
```

### Obter Uma Requisição Específica

```http
GET http://localhost:3000/requests/ipjhy4t7mfoddh52tobrcehv
```

**Resposta (200):**

```json
{
  "data": {
    "id": "ipjhy4t7mfoddh52tobrcehv",
    "title": "Request title",
    "description": "Request description",
    "priority": "high",
    "createdBy": "user-2",
    "createdAt": "2024-04-29T10:30:00Z",
    "updatedAt": "2024-04-29T10:30:00Z"
  }
}
```

### Criar Uma Requisição

```http
POST http://localhost:3000/requests
Content-Type: application/json

{
  "title": "Request title",
  "description": "Request description",
  "priority": "high",
  "createdBy": "user-2"
}
```

**Parâmetros obrigatórios:**

- `title`: Título da requisição
- `description`: Descrição detalhada
- `priority`: Prioridade (low, medium, high)
- `createdBy`: ID ou nome do usuário que criou

**Resposta (201):**

```json
{
  "data": {
    "id": "ipjhy4t7mfoddh52tobrcehv",
    "title": "Request title",
    "description": "Request description",
    "priority": "high",
    "createdBy": "user-2",
    "createdAt": "2024-04-29T10:30:00Z",
    "updatedAt": "2024-04-29T10:30:00Z"
  }
}
```

### Filtrar por Usuário

```http
GET http://localhost:3000/requests?createdBy=user-2
```

### Filtrar por Prioridade

```http
GET http://localhost:3000/requests?priority=low
```

## 🚀 Deploy

### Pré-requisitos para Deploy

1. Conta AWS configurada
2. Credenciais AWS configuradas localmente:

```bash
aws configure
```

3. Variáveis de ambiente configuradas no AWS Parameter Store:

```bash
# Armazenar senha do banco de dados
aws ssm put-parameter \
  --name "/teste-backend-ticket/db/password" \
  --value "sua_senha_db" \
  --type "SecureString" \
  --region sa-east-1
```

### Executar Deploy

**Deploy para ambiente de desenvolvimento:**

```bash
npm run deploy
```

**Deploy para ambiente de produção:**

```bash
npm run deploy -- --stage prod
```

### Verificar Deploy

Após o deploy, a saída conterá a URL do API Gateway. Por exemplo:

```
GET - https://xxxxxxxx.execute-api.sa-east-1.amazonaws.com/dev/requests
POST - https://xxxxxxxx.execute-api.sa-east-1.amazonaws.com/dev/requests
```

Use essas URLs para fazer requests na API deployada.

## 📁 Estrutura do Projeto

```
src/
├── controllers/          # Controllers das rotas
│   └── request/
│       ├── create/       # Criar requisição
│       ├── list/         # Listar requisições
│       └── list-one/     # Obter uma requisição
├── domains/              # Camada de domínio
│   ├── dtos/            # Data Transfer Objects
│   ├── entities/        # Entidades do domínio
│   ├── enums/           # Enumerações
│   └── gateways/        # Interfaces de gateways
├── functions/            # Funções Lambda
│   └── requests/
├── infra/                # Infraestrutura
│   ├── config/          # Configurações
│   ├── database/        # Conexão e migrações
│   ├── http/            # Resposta HTTP e middlewares
│   └── repositories/    # Repositórios de dados
├── main/                 # Use cases principais
├── usecases/             # Casos de uso da aplicação
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

---

**Desenvolvido com ❤️**
