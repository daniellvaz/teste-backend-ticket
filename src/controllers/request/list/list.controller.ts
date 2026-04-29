import { HttpSuccess } from "@/shared/http/HttpSuccess";
import { ListRequestsUseCase } from "@/usecases/requests/list/list-requests.usecase";

import { APIGatewayProxyEventQueryStringParameters } from "aws-lambda";
import { listRequestsQuerySchema } from "./list.schema";

export class ListRequestsController {
  constructor(private readonly listRequestsUseCase: ListRequestsUseCase) {}

  async execute(params?: APIGatewayProxyEventQueryStringParameters) {
    const { page, perPage, ...filters } = listRequestsQuerySchema.parse(params);
    const output = await this.listRequestsUseCase.execute(
      filters,
      page,
      perPage,
    );
    const response = new HttpSuccess(output.data, output.meta);

    return response.send();
  }
}
