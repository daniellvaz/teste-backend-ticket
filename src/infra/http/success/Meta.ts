export class Meta {
  public total: number;
  public page: number;
  public perPage: number;
  public totalPages?: number = 0;
  public filters: Array<Record<string, any>> = [];

  constructor(params: Meta) {
    this.total = params.total;
    this.page = params.page;
    this.perPage = params.perPage;
    this.filters = params.filters;
    this.totalPages = Math.ceil(this.total / this.perPage);
  }
}
