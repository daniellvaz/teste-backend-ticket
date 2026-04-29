export interface UseCase<InputDTO, OutputDTO> {
  execute(data: InputDTO, page?: number, perPage?: number): Promise<OutputDTO>;
}
