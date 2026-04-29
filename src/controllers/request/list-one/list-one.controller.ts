import { HttpSuccess } from "@/infra/http/success/HttpSuccess";
import { ListOneRequestUseCase } from "@/usecases/requests/list-one/list-one-request.usecase";

import { APIGatewayProxyEventPathParameters } from "aws-lambda";
import { listOneParamsSchema } from "./list-one.schema";

export class ListOneRequestController {
  constructor(private readonly listOneRequestUseCase: ListOneRequestUseCase) {}

  async execute(params: APIGatewayProxyEventPathParameters | null) {
    const { id } = listOneParamsSchema.parse(params);
    const output = await this.listOneRequestUseCase.execute({ id });
    const response = new HttpSuccess(output);

    return response.send();
  }
}
