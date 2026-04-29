import { Meta } from "@/infra/http/success/Meta";
import { CreateRequestDTO } from "../dtos/create-request.dto";
import { Request } from "../entities/request.entity";

export interface ListRequestsInputDTO {
  priority?: "low" | "medium" | "high";
  createdBy?: string;
}

export interface ListRequestOutputDTO {
  data: Request[];
  meta: Meta;
}

export interface RequestGetway {
  findAll(
    page: number,
    perPage: number,
    filters?: ListRequestsInputDTO,
  ): Promise<ListRequestOutputDTO>;
  findById(id: string): Promise<Request | null>;
  create(request: CreateRequestDTO): Promise<Request>;
}
