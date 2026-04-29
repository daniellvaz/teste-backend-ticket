import { HttpCreate } from "@/infra/http/success/HttpCreate";
import { CreateRequestUseCase } from "@/usecases/requests/create/create-request.usecase";
import { createRequestBodySchema } from "./create-request.schema";

export class CreateRequestController {
  constructor(private readonly createRequestUseCase: CreateRequestUseCase) {}

  async execute(data: any) {
    const input = createRequestBodySchema.parse(data);

    const output = await this.createRequestUseCase.execute(input);
    const response = new HttpCreate(output);

    return response.send();
  }
}
