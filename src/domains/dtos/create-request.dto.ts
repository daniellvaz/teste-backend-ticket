import { RequestPriority } from "../enums/RequestPriority";

export interface CreateRequestDTO {
  title: string;
  description: string;
  createdBy: string;
  priority: RequestPriority;
}
