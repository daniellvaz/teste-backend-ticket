import { eq, like } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

import { Request } from "@/domains/entities/request.entity";

import {
  ListRequestOutputDTO,
  ListRequestsInputDTO,
  RequestGetway,
} from "@/domains/gateways/request.gateway";

import { CreateRequestDTO } from "@/domains/dtos/create-request.dto";

import { Schema } from "@/infra/database";
import { requests } from "@/infra/database/schemas";
import { Meta } from "@/infra/http/success/Meta";

export class RequestRepository implements RequestGetway {
  constructor(private readonly database: NodePgDatabase<Schema>) {}

  async findAll(
    page: number,
    perPage: number,
    { ...filters }: ListRequestsInputDTO,
  ): Promise<ListRequestOutputDTO> {
    const total = await this.database.$count(requests);
    const offset = (page - 1) * perPage;

    const data = await this.database.query.requests.findMany({
      where: (request) =>
        filters && filters.priority
          ? eq(request.priority, filters.priority)
          : filters.createdBy
            ? like(request.createdBy, `%${filters.createdBy}%`)
            : undefined,
      limit: perPage,
      offset,
    });

    return {
      data,
      meta: new Meta({
        total,
        page,
        perPage,
        filters: [
          {
            label: "Priority",
            name: "priority",
            type: "text",
          },
          {
            label: "Created By",
            name: "createdBy",
            type: "text",
          },
        ],
      }),
    };
  }

  async findById(id: string): Promise<Request | null> {
    const request = await this.database.query.requests.findFirst({
      where: eq(requests.id, id),
    });

    if (!request) {
      return null;
    }

    return request;
  }

  async create(data: CreateRequestDTO): Promise<Request> {
    const request = new Request(data);

    const [result] = await this.database
      .insert(requests)
      .values(request)
      .returning();

    return result;
  }
}
