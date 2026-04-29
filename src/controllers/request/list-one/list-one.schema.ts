import z from "zod";

export const listOneParamsSchema = z.object({
  id: z.string("Invalid ID format"),
});
