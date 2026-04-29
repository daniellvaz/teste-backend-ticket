import { withRequestContext } from "@/infra/http/middlewares/request-context";
import { withMiddleware } from "@/infra/http/middlewares/with-middleware";
import { createRequestController } from "@/main/request/create-request";
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";

const lambdaHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
) => {
  const body = JSON.parse(event.body || "{}");
  const response = await createRequestController.execute(body);

  return response;
};

export const handler = withMiddleware(withRequestContext(lambdaHandler));
