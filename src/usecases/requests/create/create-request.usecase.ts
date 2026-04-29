import { RequestGetway } from "@/domains/gateways/request.gateway";

import { UseCase } from "@/usecases/usecase";
import {
  CreateRequestInputDTO,
  CreateRequestOutputDTO,
} from "./create-request.dto";

export class CreateRequestUseCase implements UseCase<
  CreateRequestInputDTO,
  CreateRequestOutputDTO
> {
  constructor(private readonly requestGetway: RequestGetway) {}

  async execute(data: CreateRequestInputDTO): Promise<CreateRequestOutputDTO> {
    const result = await this.requestGetway.create(data);

    return result;
  }
}
