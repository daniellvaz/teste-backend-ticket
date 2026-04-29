export const RequestPriority = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type RequestPriority =
  (typeof RequestPriority)[keyof typeof RequestPriority];
