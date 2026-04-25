export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "List all requests",
    }),
  };
}
