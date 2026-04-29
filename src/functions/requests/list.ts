import { LambdaFunctionURLEvent, LambdaFunctionURLHandler } from "aws-lambda";

import { withRequestContext } from "@/infra/http/middlewares/request-context";
import { withMiddleware } from "@/infra/http/middlewares/with-middleware";
import { listRequestsController } from "@/main/request/list";

const lambdaHandler: LambdaFunctionURLHandler = async (
  event: LambdaFunctionURLEvent,
) => {
  const result = await listRequestsController.execute(
    event.queryStringParameters,
  );

  return result;
};

export const handler = withRequestContext(withMiddleware(lambdaHandler));
