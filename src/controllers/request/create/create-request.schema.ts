import z from "zod";

export const createRequestBodySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  priority: z.enum(
    ["low", "medium", "high"],
    "Priority must be one of: low, medium, high",
  ),
  createdBy: z.string().min(1, "CreatedBy is required"),
});
