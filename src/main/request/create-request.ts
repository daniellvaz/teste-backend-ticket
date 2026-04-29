import { CreateRequestController } from "@/controllers/request/create/create-request.controller";
import { database } from "@/infra/database";
import { RequestRepository } from "@/infra/repositories/request.repository";
import { CreateRequestUseCase } from "@/usecases/requests/create/create-request.usecase";

export const createRequestRepository = new RequestRepository(database);
export const createRequestUsecase = new CreateRequestUseCase(
  createRequestRepository,
);
export const createRequestController = new CreateRequestController(
  createRequestUsecase,
);
