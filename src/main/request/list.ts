import { ListRequestsController } from "@/controllers/request/list/list.controller";
import { database } from "@/infra/database";
import { RequestRepository } from "@/infra/repositories/request.repository";
import { ListRequestsUseCase } from "@/usecases/requests/list/list-requests.usecase";

export const listRequestsRepository = new RequestRepository(database);
export const listRequestsUseCase = new ListRequestsUseCase(
  listRequestsRepository,
);
export const listRequestsController = new ListRequestsController(
  listRequestsUseCase,
);
