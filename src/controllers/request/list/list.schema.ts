import z from "zod";

export const listRequestsQuerySchema = z.object({
  createdBy: z.string().optional(),
  priority: z.enum(["low", "medium", "high"], "Invalid priority").optional(),
  page: z.string().transform((value) => Number(value)),
  perPage: z.string().transform((value) => Number(value)),
});
