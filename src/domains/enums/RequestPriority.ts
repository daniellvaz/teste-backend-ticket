export const RequestPriority = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export type RequestPriority =
  (typeof RequestPriority)[keyof typeof RequestPriority];
