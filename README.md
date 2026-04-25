1. API Serverless na AWS

Cenário:
Criação de uma API para gestão de solicitações (tickets), que serão criadas e consultadas via app ou backoffice.

Requisitos Técnicos:

- Stack: Node.js + TypeScript + Serverless Framework.
- Deploy (Obrigatório): AWS (API Gateway + Lambda).
- Persistência: RDS (com justificativa).
- Observabilidade: Logs no CloudWatch e rastreabilidade por requestId.

Endpoints Mínimos:

- POST /requests: Criação de solicitação (campos: title, description, priority, createdBy). Deve validar o payload e retornar 201.
- GET /requests/{id}: Retorno por ID (404 se não encontrado).
- GET /requests?createdBy=&status=: Listagem com filtros simples.

Boas Práticas e Entregáveis:

- Separação em camadas (handler/service/repository) e tratamento de erros.
- Uso de variáveis de ambiente.
- README com instruções de execução local, deploy e exemplos de requests.
- Repositório com o código e evidência do deploy (URL funcional).
