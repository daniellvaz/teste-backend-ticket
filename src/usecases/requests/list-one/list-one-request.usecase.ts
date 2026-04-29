import { RequestGetway } from "@/domains/getways/request.getway";
import { NotFound } from "@/shared/errors/NotFound";
import { UseCase } from "@/usecases/usecase";
import {
  ListOneRequestInputDTO,
  ListOneRequestOutputDTO,
} from "./list-one-request.dto";

export class ListOneRequestUseCase implements UseCase<
  ListOneRequestInputDTO,
  ListOneRequestOutputDTO
> {
  constructor(private readonly requestGetway: RequestGetway) {}

  async execute(
    data: ListOneRequestInputDTO,
  ): Promise<ListOneRequestOutputDTO> {
    const result = await this.requestGetway.findById(data.id);

    if (!result) {
      throw new NotFound("Request not found");
    }

    return result;
  }
}
