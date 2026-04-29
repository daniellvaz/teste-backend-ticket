import { ListOneRequestController } from "@/controllers/request/list-one/list-one.controller";
import { database } from "@/infra/database";
import { RequestRepository } from "@/infra/repositories/request.repository";
import { ListOneRequestUseCase } from "./../../usecases/requests/list-one/list-one-request.usecase";

export const listOneRequestRepository = new RequestRepository(database);
export const listOneRequestUseCase = new ListOneRequestUseCase(
  listOneRequestRepository,
);
export const listOneRequestController = new ListOneRequestController(
  listOneRequestUseCase,
);
