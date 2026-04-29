import { listRequestsController } from "@/main/request/list";
import { withMiddleware } from "@/shared/middlewares";
import { LambdaFunctionURLEvent, LambdaFunctionURLHandler } from "aws-lambda";

const lambdaHandler: LambdaFunctionURLHandler = async (
  event: LambdaFunctionURLEvent,
) => {
  const result = await listRequestsController.execute(
    event.queryStringParameters,
  );

  return result;
};

export const handler = withMiddleware(lambdaHandler);
