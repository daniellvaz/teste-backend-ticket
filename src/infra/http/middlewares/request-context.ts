import { randomUUID } from "crypto";

export function withRequestContext(handler: any) {
  return async (event: any, context: any) => {
    const requestId = event?.requestContext?.requestId || randomUUID();

    const startTime = Date.now();

    const log = (message: string, extra?: any) => {
      console.log(
        JSON.stringify({
          requestId,
          message,
          ...extra,
        }),
      );
    };

    try {
      log("request_started", {
        path: event.rawPath,
        method: event.requestContext?.http?.method,
      });

      const response = await handler(event, context, {
        requestId,
        log,
      });

      log("request_finished", {
        duration: Date.now() - startTime,
        statusCode: response?.statusCode,
      });

      return response;
    } catch (error: any) {
      log("request_error", {
        error: error.message,
        stack: error.stack,
      });

      throw error;
    }
  };
}
