export class Request {
  public id?: string;
  public title: string;
  public description: string;
  public priority: number;
  public createdBy: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(data: Request) {
    this.title = data.title;
    this.description = data.description;
    this.priority = data.priority;
    this.createdBy = data.createdBy;
  }
}
