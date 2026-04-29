import { RequestGetway } from "@/domains/getways/request.getway";
import { UseCase } from "@/usecases/usecase";
import {
  ListRequestsInputDTO,
  ListRequestsOutputDTO,
} from "./list-requests.dto";

export class ListRequestsUseCase implements UseCase<
  ListRequestsInputDTO,
  ListRequestsOutputDTO
> {
  constructor(private readonly requestGetway: RequestGetway) {}

  async execute(
    filters?: ListRequestsInputDTO,
    page: number = 1,
    perPage: number = 10,
  ): Promise<ListRequestsOutputDTO> {
    const result = await this.requestGetway.findAll(page, perPage, filters);

    return result;
  }
}
