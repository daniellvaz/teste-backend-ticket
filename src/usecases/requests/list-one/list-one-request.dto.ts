export interface ListOneRequestInputDTO {
  id: string;
}

export interface ListOneRequestOutputDTO {
  id?: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  createdBy: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}
