import { listOneRequestController } from "@/main/request/list-one";
import { withMiddleware } from "@/shared/middlewares";
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";

const lambdaHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
) => {
  const result = await listOneRequestController.execute(event.pathParameters);

  return result;
};

export const handler = withMiddleware(lambdaHandler);
