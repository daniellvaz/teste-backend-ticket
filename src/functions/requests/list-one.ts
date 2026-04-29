import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";

import { withRequestContext } from "@/infra/http/middlewares/request-context";
import { withMiddleware } from "@/infra/http/middlewares/with-middleware";
import { listOneRequestController } from "@/main/request/list-one";

const lambdaHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
) => {
  const result = await listOneRequestController.execute(event.pathParameters);

  return result;
};

export const handler = withRequestContext(withMiddleware(lambdaHandler));
