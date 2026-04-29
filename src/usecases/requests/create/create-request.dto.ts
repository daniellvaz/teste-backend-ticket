export interface CreateRequestInputDTO {
  title: string;
  description: string;
  createdBy: string;
  priority: "low" | "medium" | "high";
}

export interface CreateRequestOutputDTO {
  id?: string;
  title: string;
  description: string;
  createdBy: string;
  priority: "low" | "medium" | "high";
  createdAt?: Date | null;
  updatedAt?: Date | null;
}
