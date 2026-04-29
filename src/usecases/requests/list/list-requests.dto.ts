import { Meta } from "@/infra/http/success/Meta";

export interface ListRequestsInputDTO {
  createdBy?: string;
  priority?: "low" | "medium" | "high";
}

export interface ListRequestsOutputDTO {
  data: {
    id?: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    createdBy: string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
  }[];
  meta: Meta;
}
