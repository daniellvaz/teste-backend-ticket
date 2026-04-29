import { RequestPriority } from "../enums/RequestPriority";

export class Request {
  public id?: string;
  public title: string;
  public description: string;
  public priority: RequestPriority;
  public createdBy: string;
  public createdAt?: Date | null;
  public updatedAt?: Date | null;

  constructor(data: Request) {
    this.title = data.title;
    this.description = data.description;
    this.priority = data.priority;
    this.createdBy = data.createdBy;
  }
}
