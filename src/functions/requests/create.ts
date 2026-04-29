import { createRequestController } from "@/main/request/create-request";
import { withMiddleware } from "@/shared/middlewares";
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";

const lambdaHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
) => {
  const body = JSON.parse(event.body || "{}");
  const response = await createRequestController.execute(body);

  return response;
};

export const handler = withMiddleware(lambdaHandler);
